import { Flex, Input, InputGroup, Stack, Button, Divider, Text, Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import ProviderAuthButton from './ProviderAuthButton'

const SignUpForm = () => {
	return (
		<Flex direction="column" gap={2}>
			<ProviderAuthButton provider="google" newUser />
			<ProviderAuthButton provider="github" newUser />

			<Stack direction="row" alignItems="center" gap={2} my={4}>
				<Divider borderColor="gray.400" />
				<Text fontSize={14}>Or</Text>
				<Divider borderColor="gray.400" />
			</Stack>

			<Stack>
				<InputGroup>
					<Input type="text" placeholder="Username" />
				</InputGroup>
				<InputGroup>
					<Input type="email" placeholder="Email" />
				</InputGroup>
				<InputGroup>
					<Input type="password" placeholder="Password" />
				</InputGroup>
			</Stack>

			<Button colorScheme="yellow" mt={4} mr="auto">
				Create Account
			</Button>

			<Text fontSize={14} mt={6}>
				Already have an account?
				<Link href="signin" as={NextLink} ml={2} textDecoration="underline" fontWeight="semibold">
					Log in
				</Link>
			</Text>
		</Flex>
	)
}

export default SignUpForm
