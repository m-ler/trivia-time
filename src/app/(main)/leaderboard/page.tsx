import Leaderboard from '@/components/leaderboard'
import { NEXTAUTH_URL } from '@/config'
import { UserWithProfile } from '@/types'

export const metadata = {
	title: 'Leaderboard',
}

const getLeaderboardData = async () => {
	const response = await fetch(`${NEXTAUTH_URL}/api/leaderboard`, {
		next: {
			revalidate: 60,
		},
	})

	const result = await response.json()
	return result as UserWithProfile[]
}

const Page = async () => {
	const data = await getLeaderboardData()
	return <Leaderboard data={data || []} />
}

export default Page
