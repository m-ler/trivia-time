import { prisma } from '@/lib/prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	avatarSrc: string
}

export const POST = async (req: NextRequest) => {
	const session = await getServerSession()

	if (!session) {
		return new NextResponse('User is not authenticated.', {
			status: 401,
		})
	}

	const data: Params = await req.json()
	const { avatarSrc } = data

	if (!avatarSrc) {
		return new NextResponse('Invalid image.', {
			status: 400,
		})
	}

	try {
		await prisma.user.update({
			where: { email: session.user?.email || '' },
			data: {
				profile: {
					update: {
						customImage: avatarSrc,
					},
				},
			},
		})
	} catch (e) {
		return new NextResponse("Couldn't update the image at this moment. Please try again later.", {
			status: 500,
		})
	}

	return new NextResponse('Image updated successfully.', {
		status: 200,
	})
}
