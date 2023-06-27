import { prisma } from '@/lib/prisma/client'
import { NextResponse } from 'next/server'

export const GET = async () => {
	try {
		const users = await prisma.user.findMany({
			where: {
				profile: { isNot: null },
			},
			orderBy: {
				profile: {
					averageScore: 'desc',
				},
			},
			select: {
				email: true,
				image: true,
				name: true,
				profile: {
					select: {
						customImage: true,
						score: true,
						negativeScore: true,
						averageScore: true,
					},
				},
			},
			take: 100,
		})
		return NextResponse.json(users)
	} catch (e) {
		return new NextResponse('', { status: 500 })
	}
}
