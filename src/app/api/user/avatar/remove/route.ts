import { prisma } from '@/lib/prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export const DELETE = async () => {
	const session = await getServerSession()
 
	if (!session) {
		return new NextResponse('User is not authenticated.', {
			status: 401,
		})
	}

	try {
		await prisma.user.update({
			where: { email: session.user?.email || '' },
			data: {
				image: null,
				profile: {
					update: {
						customImage: null,
					},
				},
			},
		})
	} catch (e) {
		return new NextResponse("Couldn't remove the avatar at this moment. Please try again later.", {
			status: 500,
		})
	}

	return new NextResponse('Avatar removed successfully.', {
		status: 200,
	})
}
