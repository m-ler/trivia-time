'use client'

import { Button, Center, Flex, Link, Slide } from '@chakra-ui/react'
import { Image, Link as NextLink } from '@chakra-ui/next-js'

const Header = () => {
	return (
		<Slide direction='top' in style={{ position: 'static' }}>
			<Flex as="header" bg="secondary.700" px={4} py={3}>
				<Center w="100%">
					<Flex
						width="100%"
						maxW="6xl"
						justifyContent="space-between"
						alignItems="center"
					>
						<Flex>
							<Link as={NextLink} href="/">
								<Image
									width={34}
									height={34}
									src="/img/trivia_time_icon.svg"
									alt="logo"
									priority
									mr={8}
								/>
							</Link>

							<Center>
								<Link
									as={NextLink}
									href="/leaderboard"
									fontSize={14}
									color="gray.100"
								>
									Leaderboard
								</Link>
							</Center>
						</Flex>
						<Button colorScheme="primary">Login</Button>
					</Flex>
				</Center>
			</Flex>
		</Slide>
	)
}

export default Header
