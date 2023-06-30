import { Stack, Button, Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'

const AuthButtons = () => {
	return (
		<Stack direction="row" alignItems="center" wrap="nowrap" display={{ base: 'none', md: 'flex' }}>
			<Link as={NextLink} href="signin">
				<Button colorScheme="yellow" variant="ghost" color="yellow.400">
					Log in
				</Button>
			</Link>
			<Link as={NextLink} href="signup">
				<Button colorScheme="yellow" variant="solid" ml={2}>
					Sign up
				</Button>
			</Link>
		</Stack>
	)
}

export default AuthButtons
