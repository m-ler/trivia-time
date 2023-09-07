import Leaderboard from '@/components/leaderboard'
import { prisma } from '@/lib/prisma/client'
import { UserWithProfile } from '@/types'

export const metadata = {
	title: 'Leaderboard',
}

const getLeaderboardData = async () => {
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
	return users as UserWithProfile[]
}

const Page = async () => {
	const data = await getLeaderboardData()
	return <Leaderboard data={data || []} />
}

export default Page
