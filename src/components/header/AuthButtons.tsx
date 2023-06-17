import { Box, Button, Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'

const AuthButtons = () => {
	return (
		<Box>
			<Link as={NextLink} href="signin">
				<Button colorScheme="primary" variant="ghost">
					Log in
				</Button>
			</Link>
			<Link as={NextLink} href="signup">
				<Button colorScheme="primary" ml={2}>
					Sign up
				</Button>
			</Link>
		</Box>
	)
}

export default AuthButtons
