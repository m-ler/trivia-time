import providers from '@/lib/nextAuth/providers'
import { Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'

type Props = {
	provider: keyof typeof providers
	newUser?: boolean
}

const ProviderAuthButton = ({ newUser, provider }: Props) => {
	const { icon } = providers[provider]
	const name = provider.at(0)?.toUpperCase() + provider.slice(1)

	return (
		<Button py={2.5} h="auto" leftIcon={icon} variant="outline" onClick={() => signIn(provider)}>
			{newUser ? `Sign up with ${name}` : `Sign in with ${name}`}
		</Button>
	)
}

export default ProviderAuthButton
