import { prisma } from '@/lib/prisma/client'
import signUpSchema from '@/lib/zod/signUpSchema'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const POST = async (req: NextRequest) => {
	const userData = (await req.json()) as z.infer<typeof signUpSchema>
	const schemaValidation = signUpSchema.safeParse(userData)

	if (!schemaValidation.success) {
		return new NextResponse('Form has invalid values.', {
			status: 400,
		})
	}

	try {
		const userAlreadyRegistered = await prisma.user.findFirst({
			where: { email: userData.email },
		})

		if (userAlreadyRegistered) {
			return new NextResponse('Email is already registered.', {
				status: 400,
			})
		}

		const hashedPassword = await hash(userData.password, 12)
		const user = await prisma.user.create({
			data: {
				name: userData.username,
				email: userData.email.toLowerCase(),
				password: hashedPassword,
			},
		})

		return NextResponse.json({
			user: {
				name: user.name,
				email: user.email,
			},
		})
	} catch (e) {
		return new NextResponse('There was an error on the server. Please try again later.', {
			status: 500,
		})
	}
}
