import { uploadAvatar } from '@/lib/supabase/storage'
import { useToast } from '@chakra-ui/react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useSession } from 'next-auth/react'
import { useMutation } from 'react-query'

const useUpdateAvatar = () => {
	const { update: updateSession, data: session } = useSession()
	const toast = useToast()
	const uploadAvatarMutation = useMutation<AxiosResponse, unknown, File>(
		async (imageFile: File) => {
			const avatarSrc = await uploadAvatar(imageFile, session?.user?.email || '')

			const formData = new FormData()
			formData.append('avatarImg', imageFile)
			return axios.post('api/user/avatar/update', {
				avatarSrc,
			})
		},
		{
			onSuccess: () => {
				toast({ title: 'Avatar succesfully updated.', status: 'success', duration: 5000, isClosable: true })
				updateSession()
			},
			onError: (error) => {
				const errorMessage = (error as AxiosError).response?.data || (error as Error).message
				toast({ title: errorMessage as string, status: 'error', duration: 5000, isClosable: true })
			},
		}
	)

	return {
		updateAvatar: uploadAvatarMutation.mutate,
		loading: uploadAvatarMutation.isLoading,
	}
}

export default useUpdateAvatar
