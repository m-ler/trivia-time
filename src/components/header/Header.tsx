'use client'

import { Center, Flex, IconButton, Tooltip } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import AuthButtons from './AuthButtons'
import UserAvatar from './UserAvatar'
import { MdSettings } from 'react-icons/md'
import { settingsDialogState } from '@/store/settings-dialog'
import Navigation from './Navigation'

const Header = () => {
	const { data: session, status } = useSession()
	const { setOpen: setSettingsDialogOpen } = settingsDialogState((state) => state)

	return (
		<Flex as="header" px={4} py={3}>
			<Center w="100%">
				<Flex width="100%" maxW="6xl" justifyContent="space-between" alignItems="center">
					<Flex alignItems="center" rounded="2xl" bg="whiteAlpha.900" px={4} py={2} gap={8}>
						<Navigation />
						<Tooltip label="Settings" hasArrow>
							<IconButton aria-label="Settings" color="blue.400" onClick={() => setSettingsDialogOpen(true)}>
								<MdSettings size={20} />
							</IconButton>
						</Tooltip>
					</Flex>
					{status === 'loading' ? <></> : session ? <UserAvatar /> : <AuthButtons />}
				</Flex>
			</Center>
		</Flex>
	)
}

export default Header
