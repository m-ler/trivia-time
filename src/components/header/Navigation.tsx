import { Box, Link, Flex } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import NavLink from './NavLink'
import Image from 'next/image'

const Navigation = () => {
	return (
		<>
			<Link as={NextLink} href="/" flexShrink={0} mr={4}>
				<Box
					_hover={{
						'& > img': {
							transitionDuration: '200ms',
							transform: 'scale(1.15)',
						},
					}}
				>
					<Image
						width="0"
						height="0"
						src="/img/trivia_time_icon.svg"
						alt="logo"
						priority
						loading="eager"
						blurDataURL={'/img/trivia_time_icon.svg'}
						style={{
							width: '38px',
							height: 'auto',
							filter: 'drop-shadow(2px 2px 0px rgba(0,20,35,0.5))',
						}}
					/>
				</Box>
			</Link>
			<Flex as="nav" gap={8} display={{ base: 'none', md: 'flex' }}>
				<NavLink label="Play" href="/play" />
				<NavLink label="Leaderboard" href="/leaderboard" />
			</Flex>
		</>
	)
}

export default Navigation
