'use client'
import { profileDrawerState } from '@/store/profile-drawer'
import { Button, Divider, Drawer, DrawerContent, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { MdExitToApp } from 'react-icons/md'
import ScoreCard from './ScoreCard'
import AvatarButton from './AvatarButton'

const ProfileDrawer = () => {
	const user = useSession().data?.user
	const { open, setOpen } = profileDrawerState((state) => state)

	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={open} autoFocus={false}>
			<DrawerOverlay />
			<DrawerContent position="relative" margin="auto" w="480px" maxW="480px" borderTopRadius="3xl" p={4}>
				<Flex direction="column" pt={8} pb={4} position="relative" gap={2}>
					<AvatarButton />
					<Text fontWeight="bold" fontSize={24} textAlign="center">
						{user?.name}
					</Text>
					<ScoreCard type="positive" score={3449} percentage={68} />
					<ScoreCard type="negative" score={1549} percentage={32} />
					<Divider my={2} />
					<Button mx="auto" size="sm" rightIcon={<MdExitToApp />} variant="outline" onClick={() => signOut()}>
						Sign out
					</Button>
				</Flex>
			</DrawerContent>
		</Drawer>
	)
}

export default ProfileDrawer
