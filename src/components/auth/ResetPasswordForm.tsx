import { Button, Flex, FormControl, FormErrorMessage, Input, Link, Stack, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { z } from 'zod'
import { MdArrowForward } from 'react-icons/md'
import { Link as NextLink } from '@chakra-ui/next-js'

const formSchema = z.object({
	password: z
		.string()
		.min(6, 'Password must be 6 or more characters long')
		.max(30, 'Password must be 256 or fewer characters long'),
})

const ResetPasswordForm = () => {
	const token = useSearchParams().get('token')
	const [passwordUpdated, setPasswordUpdated] = useState(false)

	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const resetPasswordMutation = useMutation<AxiosResponse<string>, AxiosError>(
		async () => {
			return axios.post('api/password-recovery/reset-password', {
				newPassword: getValues('password'),
				token: token || '',
			})
		},
		{
			onSuccess: () => {
				setPasswordUpdated(true)
			},
		}
	)

	const onSubmit = handleSubmit(async () => {
		!passwordUpdated && resetPasswordMutation.mutate()
	})

	return (
		<form onSubmit={onSubmit}>
			<Flex direction="column" gap={2}>
				{passwordUpdated ? (
					<Link as={NextLink} href="/signin">
						<Button colorScheme="yellow" mr="auto" rightIcon={<MdArrowForward />}>
							Sign In
						</Button>
					</Link>
				) : (
					<>
						<Stack>
							<FormControl isInvalid={Boolean(errors.password)}>
								<Input type="password" placeholder="New password" {...register('password')} />
								<FormErrorMessage mt={1} fontSize={12}>
									{errors.password && errors.password.message}
								</FormErrorMessage>
							</FormControl>
						</Stack>
						<Button type="submit" colorScheme="yellow" mt={4} mr="auto" isLoading={resetPasswordMutation.isLoading}>
							Reset Password
						</Button>
					</>
				)}

				<FormControl isInvalid>
					<FormErrorMessage mt={1} fontSize={14} fontWeight="semibold">
						{resetPasswordMutation.error && (resetPasswordMutation.error?.response?.data as string)}
					</FormErrorMessage>
				</FormControl>

				<Text fontSize={14} fontWeight="semibold" color="green.400" hidden={!resetPasswordMutation.data?.data}>
					{resetPasswordMutation?.data?.data || ''}
				</Text>
			</Flex>
		</form>
	)
}

export default ResetPasswordForm
