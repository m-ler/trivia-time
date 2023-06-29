import { deleteDirectory } from '@/lib/supabase/storage'
import { useToast } from '@chakra-ui/react'
import axios, { AxiosResponse } from 'axios'
import { useSession } from 'next-auth/react'
import { useMutation } from 'react-query'

const useRemoveAvatar = () => {
	const { update: updateSession, data: session } = useSession()
	const toast = useToast()
	const removeAvatarMutation = useMutation<AxiosResponse, unknown>(
		async () => {
			await deleteDirectory('media', session?.user.email || '')
			return axios.delete('api/user/avatar/remove')
		},
		{
			onSuccess: () => {
				toast({ title: 'Avatar succesfully removed.', status: 'success', duration: 5000, isClosable: true })
				updateSession()
			},
			onError: () => {
				toast({
					title: "Couldn't remove the avatar. Please try again later.",
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
			},
		}
	)

	return {
		removeAvatar: removeAvatarMutation.mutate,
		loading: removeAvatarMutation.isLoading,
	}
}

export default useRemoveAvatar
