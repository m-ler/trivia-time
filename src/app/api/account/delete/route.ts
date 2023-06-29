import { prisma } from '@/lib/prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export const DELETE = async () => {
	const session = await getServerSession()

	if (!session || !session.user.email) {
		return new NextResponse('User is not authenticated.', {
			status: 401,
		})
	}

	const email = session.user.email

	try {
		const user = await prisma.user.findUnique({ where: { email } })
		if (!user?.id) {
			throw new Error()
		}

		await prisma.$transaction([
			prisma.profile.deleteMany({ where: { userId: user.id } }),
			prisma.user.delete({ where: { id: user.id } }),
		])
	} catch (e) {
		console.log(e)

		return new NextResponse("Couldn't delete the user account at this moment. Please try again later.", {
			status: 500,
		})
	}

	return new NextResponse('', {
		status: 200,
	})
}
