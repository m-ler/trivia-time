'use client'

import { Center, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import AuthButtons from './AuthButtons'
import UserAvatar from './UserAvatar'
import Navigation from './Navigation'
import HamburgerMenu from './HamburgerMenu'
import SettingsButton from './SettingsButton'

const Header = () => {
	const { data: session, status } = useSession()

	return (
		<Flex as="header" px={4} py={3}>
			<Center w="100%">
				<Flex width="100%" maxW="6xl" justifyContent="space-between" alignItems="center">
					<Flex alignItems="center" rounded="2xl" bg="whiteAlpha.900" px={4} py={2} gap={{ base: 1, md: 8 }}>
						<Navigation />
						<HamburgerMenu />
						<SettingsButton />
					</Flex>
					{status === 'loading' ? <></> : session ? <UserAvatar /> : <AuthButtons />}
				</Flex>
			</Center>
		</Flex>
	)
}

export default Header
