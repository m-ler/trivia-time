import { Flex, Input, InputGroup, Stack, Button, Divider, Text, Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import { FcGoogle } from 'react-icons/fc'

import { FaGithub } from 'react-icons/fa'
import { signIn, useSession } from 'next-auth/react'

const SignUpForm = () => {
	const { data: session } = useSession()

	return (
		<Flex direction="column" gap={2}>
			<Button py={2.5} h="auto" leftIcon={<FcGoogle size={24} />} variant="outline" onClick={() => signIn('google')}>
				Sign up with Google
			</Button>
			<Button py={2.5} h="auto" leftIcon={<FaGithub size={24} />} variant="outline">
				Sign up with Github
			</Button>

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

			<Button colorScheme="primary" mt={4} mr="auto">
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
