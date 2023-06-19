import ResetPasswordTemplate from '@/components/email-templates/ResetPasswordTemplate'
import transporter from '@/config/mailer'
import { prisma } from '@/lib/prisma/client'
import { render } from '@react-email/render'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	email: string
}

export const POST = async (req: NextRequest) => {
	const data: Params = await req.json()
	const { email } = data
	const user = await prisma.user.findFirst({ where: { email: email || '' } })

	if (!user) {
		return new NextResponse('That email does not belong to any account', {
			status: 400,
		})
	}

	try {
		const html = render(<ResetPasswordTemplate userName={user.name || ''} resetLink="https://www.google.com" />)

		transporter.sendMail({
			from: 'mler.developer@gmail.com',
			to: email,
			subject: 'Trivia Time! - Reset your password',
			html,
		})
	} catch (error) {
		return new NextResponse("We couldn't send a verification email. Please try again later", {
			status: 500,
		})
	}

	return new NextResponse('We sent an email with a password-reset link', {
		status: 200,
	})
}
