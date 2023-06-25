'use client'
import useRemoveAvatar from '@/hooks/user/useRemoveAvatar'
import useUpdateAvatar from '@/hooks/user/useUpdateAvatar'
import { Avatar, Box, Center, Flex, Menu, MenuButton, MenuItem, MenuList, Spinner, useToast } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useRef } from 'react'
import { MdOutlineCameraAlt, MdOutlineModeEditOutline, MdRemoveCircleOutline } from 'react-icons/md'

const AvatarButton = () => {
	const user = useSession().data?.user
	const toast = useToast()
	const inputFileRef = useRef<HTMLInputElement | null>(null)
	const { updateAvatar, loading: updatingAvatar } = useUpdateAvatar()
	const { removeAvatar, loading: removingAvatar } = useRemoveAvatar()

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e?.target?.files?.[0]
		e.target.value = ''

		if (!file) return
		const validSize = file.size <= 512 * 512

		if (!validSize) {
			toast({ title: 'Image size has to be 512KB or less.', status: 'error', duration: 5000, isClosable: true })
			return
		}

		updateAvatar(file)
	}

	const loading = updatingAvatar || removingAvatar
	const avatarSrc = user?.profile.customImage || user?.image || ''

	return (
		<Menu placement="bottom">
			<MenuButton
				disabled={loading}
				position="absolute"
				top={0}
				left="50%"
				transform="translate(-50%, -75%)"
				sx={{
					'& #edit-icon': {
						opacity: 0,
					},
				}}
				_hover={{ '& #edit-icon': { opacity: loading ? 0 : 1 } }}
			>
				<Avatar
					key={avatarSrc}
					name={user?.name || ''}
					src={avatarSrc}
					size="xl"
					referrerPolicy="no-referrer"
					border="6px solid #273F7C"
				>
					<Box
						id="edit-icon"
						position="absolute"
						inset={0}
						bgColor="blackAlpha.600"
						rounded="full"
						cursor="pointer"
						transitionDuration="200ms"
					>
						<Center height="100%">
							<MdOutlineModeEditOutline />
						</Center>
					</Box>
				</Avatar>
				<Flex position="absolute" inset={0} bg="blackAlpha.700" rounded="full" hidden={!loading}>
					<Spinner m="auto" color="white" size="lg" thickness="4px" speed="1000ms" />
				</Flex>
			</MenuButton>

			<MenuList>
				<MenuItem icon={<MdOutlineCameraAlt size={18} />} onClick={() => inputFileRef.current?.click()}>
					Upload avatar
				</MenuItem>
				{avatarSrc && (
					<MenuItem icon={<MdRemoveCircleOutline size={18} />} onClick={() => removeAvatar()}>
						Remove avatar
					</MenuItem>
				)}
			</MenuList>
			<input
				type="file"
				ref={inputFileRef}
				style={{ display: 'none' }}
				accept=".png, .jpg, .jpeg"
				onChange={onFileChange}
			/>
		</Menu>
	)
}

export default AvatarButton
