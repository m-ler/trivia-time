'use client'
import { Link as NextLink } from '@chakra-ui/next-js'
import { Button, Container, Input, InputGroup, Stack, Link, Text, Flex } from '@chakra-ui/react'

const SignInForm = () => {
	return (
		<Container maxWidth="lg">
			<Flex direction="column" bgColor="white" borderRadius="lg" p={4} mt={4}>
				<Text mb={4} fontWeight="bold" fontSize={22}>
					Sign In
				</Text>

				<Stack>
					<InputGroup>
						<Input type="tel" placeholder="Email" />
					</InputGroup>
					<InputGroup>
						<Input type="tel" placeholder="Password" />
					</InputGroup>
					<Link as={NextLink} href="/" fontSize={12} px={4}>
						Forgot password?
					</Link>
				</Stack>

				<Button colorScheme="primary" mt={4} ml="auto">
					Sign In
				</Button>
			</Flex>
		</Container>
	)
}

export default SignInForm
