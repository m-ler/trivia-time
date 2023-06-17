'use client'

import { Center, Flex, Link } from '@chakra-ui/react'
import { Image, Link as NextLink } from '@chakra-ui/next-js'
import { useSession } from 'next-auth/react'
import AuthButtons from './AuthButtons'
import UserAvatar from './UserAvatar'

const Header = () => {
	const { data: session } = useSession()

	return (
		<Flex as="header" px={4} py={3}>
			<Center w="100%">
				<Flex width="100%" maxW="6xl" justifyContent="space-between" alignItems="center">
					<Flex alignItems="center" rounded="2xl" bg="white" px={4} py={2}>
						<Link as={NextLink} href="/">
							<Image
								width={34}
								height={34}
								src="/img/trivia_time_icon.svg"
								alt="logo"
								loading="eager"
								blurDataURL={'/img/trivia_time_icon.svg'}
							/>
						</Link>
						<Link as={NextLink} href="/leaderboard" fontSize={14} fontWeight="semibold" ml={8}>
							Leaderboard
						</Link>
					</Flex>
					{session ? <UserAvatar /> : <AuthButtons />}
				</Flex>
			</Center>
		</Flex>
	)
}

export default Header
