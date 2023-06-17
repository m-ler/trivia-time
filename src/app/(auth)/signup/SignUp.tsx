'use client'
import SignUpForm from '@/components/SignUpForm'
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

const SignUp = () => {
	return (
		<Stack direction="row" w="full" minH="100vh">
			<Box flexGrow={1} maxWidth="lg"></Box>
			<Flex flexGrow={1} bgColor="white" overflow="auto" p={4}>
				<Container maxW="sm" sx={{ m: 'auto', p: 0 }}>
					<Text as="h1" fontSize={24} fontWeight="bold" mb={6}>
						Sign up to Trivia Time!
					</Text>

					<SignUpForm />
				</Container>
			</Flex>
		</Stack>
	)
}

export default SignUp
