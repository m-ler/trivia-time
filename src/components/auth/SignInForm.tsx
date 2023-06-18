'use client'
import { Link as NextLink } from '@chakra-ui/next-js'
import { Button, Input, InputGroup, Stack, Link, Text, Flex, Divider } from '@chakra-ui/react'
import ProviderAuthButton from './ProviderAuthButton'

const SignInForm = () => {
	return (
		<Flex direction="column" gap={2}>
			<ProviderAuthButton provider="google" />
			<ProviderAuthButton provider="github" />

			<Stack direction="row" alignItems="center" gap={2} my={4}>
				<Divider borderColor="gray.400" />
				<Text fontSize={14}>Or</Text>
				<Divider borderColor="gray.400" />
			</Stack>

			<Stack>
				<InputGroup>
					<Input type="tel" placeholder="Email" />
				</InputGroup>
				<InputGroup>
					<Input type="tel" placeholder="Password" />
				</InputGroup>
			</Stack>
			<Link as={NextLink} href="/" fontSize={12} mt={2}>
				Forgot password?
			</Link>

			<Button colorScheme="yellow" mt={4} ml="auto">
				Sign In
			</Button>

			<Text fontSize={14} mt={6}>
				Don&apos;t have an account?
				<Link href="/signup" as={NextLink} ml={2} textDecoration="underline" fontWeight="semibold">
					Sign up
				</Link>
			</Text>
		</Flex>
	)
}

export default SignInForm
