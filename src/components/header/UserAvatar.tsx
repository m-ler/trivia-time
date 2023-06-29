import { profileDrawerState } from '@/store/profile-drawer'
import { Avatar, Flex, Box, Tooltip } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

const UserAvatar = () => {
	const user = useSession().data?.user
	const { setOpen: setProfileDrawerOpen } = profileDrawerState((state) => state)

	const handleClick = () => {
		setProfileDrawerOpen(true)
	}

	if (!user) return <></>

	return (
		<Flex alignItems="center" gap={4}>
			<Box rounded="full" p={0.5} bg="white">
				<Tooltip hasArrow label="Profile">
					<Avatar
						name={user.name || ''}
						src={user.profile?.customImage || user.image || ''}
						size="md"
						referrerPolicy="no-referrer"
						sx={{ cursor: 'pointer' }}
						onClick={handleClick}
					/>
				</Tooltip>
			</Box>
		</Flex>
	)
}

export default UserAvatar
