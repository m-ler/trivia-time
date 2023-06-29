import { deleteDirectory } from '@/lib/supabase/storage'
import { useToast } from '@chakra-ui/react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { signOut, useSession } from 'next-auth/react'
import { useMutation } from 'react-query'

const useDeleteAccount = () => {
	const toast = useToast()
	const { data: session } = useSession()

	const deleteAccount = useMutation<AxiosResponse, unknown>(
		async () => {
			await deleteDirectory('media', session?.user.email || '')
			return axios.delete('api/account/delete')
		},
		{
			onSuccess: () => {
				signOut()
			},
			onError: (error) => {
				const errorMessage = (error as AxiosError).response?.data || (error as Error).message
				toast({ title: errorMessage as string, status: 'error', duration: 5000, isClosable: true })
			},
		}
	)

	return {
		deleteAccount: deleteAccount.mutate,
		isLoading: deleteAccount.isLoading,
	}
}

export default useDeleteAccount
