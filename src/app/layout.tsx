'use client'

import Providers from '@/config/Providers'
import { Button, Center, Flex, Link } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import { Image, Link as NextLink } from '@chakra-ui/next-js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Trivia Time!',
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<style jsx global>
					{`
						:root {
							--font-inter: ${inter.style.fontFamily};
						}
					`}
				</style>
			</head>
			<body>
				<Providers>
					<Flex as="header" bg="secondary.500" px={4} py={3}>
						<Center w="100%">
							<Flex
								width="100%"
								maxW="6xl"
								justifyContent="space-between"
								alignItems="center"
							>
								<Flex>
									<Image
										width={34}
										height={34}
										src="/img/trivia_time_icon.svg"
										alt="logo"
										priority
										mr={8}
									/>
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

					{children}
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
