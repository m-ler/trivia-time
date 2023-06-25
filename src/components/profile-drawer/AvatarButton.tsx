'use client'
import useUpdateAvatar from '@/hooks/user/useUpdateAvatar'
import { Avatar, Box, Center, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useRef } from 'react'
import { MdOutlineCameraAlt, MdOutlineModeEditOutline, MdRemoveCircleOutline } from 'react-icons/md'

const AvatarButton = () => {
	const user = useSession().data?.user
	const toast = useToast()
	const inputFileRef = useRef<HTMLInputElement | null>(null)
	const { updateAvatar } = useUpdateAvatar()

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

	return (
		<Menu placement="bottom">
			<MenuButton
				position="absolute"
				top={0}
				left="50%"
				transform="translate(-50%, -75%)"
				sx={{
					'& #edit-icon': {
						opacity: 0,
					},
				}}
				_hover={{ '& #edit-icon': { opacity: 1 } }}
			>
				<Avatar
					name={user?.name || ''}
					src={user?.profile.customImage || user?.image || ''}
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
			</MenuButton>

			<MenuList>
				<MenuItem icon={<MdOutlineCameraAlt size={18} />} onClick={() => inputFileRef.current?.click()}>
					Upload avatar
				</MenuItem>
				<MenuItem icon={<MdRemoveCircleOutline size={18} />}> Remove avatar</MenuItem>
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
