'use client'

import { Flex, FormControl, FormErrorMessage, Input, Stack, Button } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useMutation } from 'react-query'

const formSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
})

const ForgotPasswordForm = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const resetRequestMutation = useMutation(async () => {
		//
	})

	const onSubmit = handleSubmit(async () => {
		resetRequestMutation.mutate()
	})

	return (
		<form onSubmit={onSubmit}>
			<Flex direction="column" gap={2}>
				<Stack>
					<FormControl isInvalid={Boolean(errors.email)}>
						<Input type="email" placeholder="Email" {...register('email')} />
						<FormErrorMessage mt={1} fontSize={12}>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>
				</Stack>

				<Button type="submit" colorScheme="yellow" mt={4} mr="auto" isLoading={resetRequestMutation.isLoading}>
					Send Reset Link
				</Button>

				<FormControl isInvalid>
					<FormErrorMessage mt={1} fontSize={14} fontWeight="semibold">
						{((resetRequestMutation.data as unknown as string) && resetRequestMutation.data) || ''}
					</FormErrorMessage>
				</FormControl>
			</Flex>
		</form>
	)
}

export default ForgotPasswordForm
