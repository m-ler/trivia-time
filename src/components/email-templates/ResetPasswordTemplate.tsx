import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Button } from '@react-email/button'

type Props = {
	userName: string
	resetLink: string
}

const ResetPasswordTemplate = ({ userName, resetLink }: Props) => {
	return (
		<Html lang="en">
			<Text style={{ marginBottom: '0.5rem', fontSize: '16px', fontWeight: 'bold' }}>{`Hello ${userName},`}</Text>
			<Text style={{ fontSize: '14px', fontWeight: 'normal' }}>
				A request has been received to change the password for your Trivia Time! account. <br /> Please, follow this
				link to reset the password:
			</Text>
			<Button style={{ textDecoration: 'underline', fontSize: '14px' }} href={resetLink}>
				Reset Password
			</Button>
		</Html>
	)
}

export default ResetPasswordTemplate
