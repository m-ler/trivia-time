import { getServerSession } from 'next-auth'
import SignIn from './SignIn'
import { redirect } from 'next/navigation'
import authConfig from '@/lib/nextAuth/authConfig'

export const metadata = {
	title: 'Sign In | Trivia Time!',
}

const Page = async () => {
	const session = await getServerSession(authConfig)

	if (session) {
		redirect('/')
	}
	return <SignIn />
}

export default Page
