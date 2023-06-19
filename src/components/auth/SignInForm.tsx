'use client'
import { Link as NextLink } from '@chakra-ui/next-js'
import { Button, Input, Stack, Link, Text, Flex, Divider, FormControl, FormErrorMessage } from '@chakra-ui/react'
import ProviderAuthButton from './ProviderAuthButton'
import { useForm } from 'react-hook-form'
import signInSchema from '@/lib/zod/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query'

const SignInForm = () => {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
	})

	const signInMutation = useMutation(
		() => {
			return signIn('credentials', {
				redirect: false,
				email: getValues('email'),
				password: getValues('password'),
				callbackUrl: '/',
			})
		},
		{
			onSuccess: (data) => {
				if (!data?.error) router.push(data?.url || '/')
			},
		}
	)

	const onSubmit = handleSubmit(async () => {
		signInMutation.mutate()
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

					<FormControl isInvalid={Boolean(errors.password)}>
						<Input type="password" placeholder="Password" {...register('password')} />
						<FormErrorMessage mt={1} fontSize={12}>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>
				</Stack>

				<Link as={NextLink} href="/" fontSize={12} mt={2}>
					Forgot password?
				</Link>

				<Button type="submit" colorScheme="yellow" mt={4} ml="auto" isLoading={signInMutation.isLoading}>
					Sign In
				</Button>

				<FormControl isInvalid>
					<FormErrorMessage mt={1} fontSize={14} fontWeight="semibold">
						{signInMutation.data?.error && signInMutation.data?.error}
					</FormErrorMessage>
				</FormControl>

				<Text fontSize={14} mt={6}>
					Don&apos;t have an account?
					<Link href="/signup" as={NextLink} ml={2} textDecoration="underline" fontWeight="semibold">
						Sign up
					</Link>
				</Text>
			</Flex>
		</form>
	)
}

export default SignInForm
