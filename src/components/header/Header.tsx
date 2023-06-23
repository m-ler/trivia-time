'use client'

import { Box, Center, Flex, Link } from '@chakra-ui/react'
import { Image, Link as NextLink } from '@chakra-ui/next-js'
import { useSession } from 'next-auth/react'
import AuthButtons from './AuthButtons'
import UserAvatar from './UserAvatar'

const Header = () => {
	const { data: session, status } = useSession()

	return (
		<Flex as="header" px={4} py={3}>
			<Center w="100%">
				<Flex width="100%" maxW="6xl" justifyContent="space-between" alignItems="center">
					<Flex alignItems="center" rounded="2xl" bg="whiteAlpha.900" px={4} py={2} gap={8}>
						<Link as={NextLink} href="/" flexShrink={0} mr={8}>
							<Box>
								<Image
									width={34}
									height={34}
									src="/img/trivia_time_icon.svg"
									alt="logo"
									loading="eager"
									blurDataURL={'/img/trivia_time_icon.svg'}
								/>
							</Box>
						</Link>
						<Link as={NextLink} href="/play" fontSize={14} fontWeight="semibold">
							Play
						</Link>
						<Link as={NextLink} href="/leaderboard" fontSize={14} fontWeight="semibold">
							Leaderboard
						</Link>
					</Flex>
					{status === 'loading' ? <></> : session ? <UserAvatar /> : <AuthButtons />}
				</Flex>
			</Center>
		</Flex>
	)
}

export default Header
