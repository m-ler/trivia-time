'use client'

import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

const ForgotPassword = () => {
	return (
		<Stack direction="row" w="full" minH="100vh">
			<Box flexGrow={1} maxWidth="lg"></Box>
			<Flex flexGrow={1} bgColor="white" overflow="auto" p={4}>
				<Container maxW="sm" sx={{ m: 'auto', p: 0 }}>
					<Text as="h1" fontSize={24} fontWeight="bold" mb={6}>
						Forgot password?
					</Text>

					<Text as="p" fontSize={14} mb={4}>
						Enter the email address you used when you joined and we&apos;ll send you a link to reset your password.
					</Text>

					<ForgotPasswordForm />
				</Container>
			</Flex>
		</Stack>
	)
}

export default ForgotPassword
