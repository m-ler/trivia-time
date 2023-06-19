import { Flex, Input, Stack, Button, Divider, Text, Link, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import ProviderAuthButton from './ProviderAuthButton'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signUpSchema from '@/lib/zod/signUpSchema'
import axios, { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { NextResponse } from 'next/server'

const SignUpForm = () => {
	const signUpMutation = useMutation<unknown, AxiosError, string>(
		async (data: string) => {
			const response = axios.post<NextResponse>('api/signup', data)
			return (await response).data
		},
		{
			onSuccess: (data) => {
				console.log(data)
			},
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
	})

	const onSubmit = handleSubmit((data) => {
		signUpMutation.mutate(JSON.stringify(data))
	})

	return (
		<form onSubmit={onSubmit}>
			<Flex direction="column" gap={2}>
				<ProviderAuthButton provider="google" />
				<ProviderAuthButton provider="github" />

				<Stack direction="row" alignItems="center" gap={2} my={4}>
					<Divider borderColor="gray.400" />
					<Text fontSize={14}>Or</Text>
					<Divider borderColor="gray.400" />
				</Stack>

				<Stack>
					<FormControl isInvalid={Boolean(errors.email)}>
						<Input type="email" placeholder="Email" {...register('email')} />
						<FormErrorMessage mt={1} fontSize={12}>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={Boolean(errors.username)}>
						<Input placeholder="Username" {...register('username')} />
						<FormErrorMessage mt={1} fontSize={12}>
							{errors.username && errors.username.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={Boolean(errors.password)}>
						<Input type="password" placeholder="Password" {...register('password')} />
						<FormErrorMessage mt={1} fontSize={12}>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>
				</Stack>

				<Button colorScheme="yellow" mt={4} mr="auto" type="submit" isLoading={signUpMutation.isLoading}>
					Create Account
				</Button>

				<FormControl isInvalid>
					<FormErrorMessage mt={1} fontSize={14} fontWeight="semibold">
						{signUpMutation.error && (signUpMutation.error?.response?.data as string)}
					</FormErrorMessage>
				</FormControl>

				<Text fontSize={14} mt={6}>
					Already have an account?
					<Link href="/signin" as={NextLink} ml={2} textDecoration="underline" fontWeight="semibold">
						Log in
					</Link>
				</Text>
			</Flex>
		</form>
	)
}

export default SignUpForm
