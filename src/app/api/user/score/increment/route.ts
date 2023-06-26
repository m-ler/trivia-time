import { prisma } from '@/lib/prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	positive: boolean
}

export const PUT = async (req: NextRequest) => {
	const session = await getServerSession()

	if (!session) {
		return new NextResponse('', { status: 401 })
	}

	const data: Params = await req.json()
	const { positive } = data

	try {
		await prisma.user.update({
			where: { email: session.user?.email || '' },
			data: {
				profile: {
					update: {
						score: {
							increment: positive ? 1 : 0,
						},
						negativeScore: {
							increment: positive ? 0 : 1,
						},
					},
				},
			},
		})
	} catch (e) {
		return new NextResponse('', { status: 500 })
	}

	return new NextResponse('', { status: 200 })
}
