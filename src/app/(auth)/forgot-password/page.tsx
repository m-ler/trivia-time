import { getServerSession } from 'next-auth'
import ForgotPassword from './ForgotPassword'
import authConfig from '@/lib/nextAuth/authConfig'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Forgot password',
}

const Page = async () => {
	const session = await getServerSession(authConfig)

	if (session) {
		redirect('/')
	}

	return <ForgotPassword />
}

export default Page
