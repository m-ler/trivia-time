import { getServerSession } from 'next-auth'
import ResetPassword from './ResetPassword'
import authConfig from '@/lib/nextAuth/authConfig'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Reset password',
}

const Page = async () => {
	const session = await getServerSession(authConfig)

	if (session) {
		redirect('/')
	}

	return <ResetPassword />
}

export default Page
