'use client'

import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { MdPlayCircleFilled } from 'react-icons/md'

const Home = () => {
	return (
		<Box px={4}>
			<Container maxW="6xl" sx={{ p: 0, mt: { base: 4, md: 12 } }}>
				<Flex gap={8} alignItems="center" direction={{ base: 'column', md: 'row' }}>
					<Flex direction="column" flexBasis={{ base: '0', md: '480px' }}>
						<Text
							as="h1"
							color="white"
							fontSize={{ base: 58, md: 72 }}
							fontWeight="black"
							lineHeight={{ base: '58px', md: '72px' }}
							bgClip="text"
							bgGradient="linear(to-l, #D4DAF8, white)"
							width="min-content"
						>
							TRIVIA <br /> TIME!
						</Text>
						<Text as="h3" color="white" fontSize={16} mt={4}>
							Put your knowledge to the test with AI-generated trivias and ascend the leaderboard to claim the top spot.
						</Text>
						<Link href="/play">
							<Button colorScheme="yellow" mt={8} mr="auto" size="lg" rightIcon={<MdPlayCircleFilled size={22} />}>
								START
							</Button>
						</Link>
					</Flex>
					<Flex>
						<Image
							src="/img/illustrations/home.svg"
							width="0"
							height="0"
							priority
							alt="illustration"
							style={{
								width: '100%',
								height: 'auto',
							}}
						/>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Home
