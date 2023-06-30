import { Box, Link, Flex } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import NavLink from './NavLink'
import Image from 'next/image'

const Navigation = () => {
	return (
		<>
			<Link as={NextLink} href="/" flexShrink={0} mr={8}>
				<Box>
					<Image
						width="0"
						height="0"
						src="/img/trivia_time_icon.svg"
						alt="logo"
						loading="eager"
						blurDataURL={'/img/trivia_time_icon.svg'}
						style={{
							width: '34px',
							height: 'auto',
						}}
					/>
				</Box>
			</Link>
			<Flex gap={8} display={{ base: 'none', md: 'flex' }}>
				<NavLink label="Play" href="/play" />
				<NavLink label="Leaderboard" href="/leaderboard" />
			</Flex>
		</>
	)
}

export default Navigation
