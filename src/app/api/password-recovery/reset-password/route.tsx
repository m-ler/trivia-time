import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma/client'
import { hash } from 'bcrypt'

type Params = {
	newPassword: string
	token: string
}

type Token = {
	email: string
}

export const POST = async (req: NextRequest) => {
	const data: Params = await req.json()
	const { newPassword, token } = data
	const hashedPassword = await hash(newPassword, 12)
	let email = ''

	try {
		const secret = process.env.NEXTAUTH_SECRET || ''
		const decoded = jwt.verify(token, secret) as Token
		email = decoded.email
	} catch (err) {
		return new NextResponse('Reset password link expired or is not valid', {
			status: 400,
		})
	}

	if (!email) {
		return new NextResponse('Reset password link is not valid', {
			status: 400,
		})
	}

	try {
		await prisma.user.update({
			where: {
				email: email || '',
			},
			data: {
				password: hashedPassword,
			},
		})
	} catch (err) {
		return new NextResponse("We couldn't update your pasword at this moment. Please try again later", {
			status: 500,
		})
	}

	return new NextResponse('Password has been updated', {
		status: 200,
	})
}
