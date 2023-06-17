import SignUp from './SignUp'
import authConfig from '@/lib/nextAuth/authConfig'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Sign Up | Trivia Time!',
}

const Page = async () => {
	const session = await getServerSession(authConfig)

	if (session) {
		redirect('/')
	}

	return <SignUp />
}

export default Page
