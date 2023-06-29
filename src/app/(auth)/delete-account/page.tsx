import { getServerSession } from 'next-auth'
import DeletteAccount from './DeleteAccount'
import authConfig from '@/lib/nextAuth/authConfig'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Delete account',
}

const Page = async () => {
	const session = await getServerSession(authConfig)

	if (!session) {
		redirect('/')
	}

	return <DeletteAccount />
}

export default Page
