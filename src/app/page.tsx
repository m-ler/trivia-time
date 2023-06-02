'use client'

import TriviaRoulette from '@/components/trivia-roulette'
import { Box, Button, Center, Container, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const metadata = {
	title: 'Trivia Time!',
}

type TriviaResponse = {
	trivia: string
}

const Home = () => {
	const [buttonLoading, setButtonLoading] = useState(false)
	const [trivia, setTrivia] = useState('')

	const handleClick = async () => {
		setButtonLoading(true)
		const response = await fetch('api/trivia')
		const text = await response.text()
		const triviaResult: TriviaResponse = JSON.parse(text)

		setButtonLoading(false)
		setTrivia(triviaResult.trivia || '')
	}

	return (
		<Box as="main" width="100%" px={4} py={8}>
			<Container maxW="6xl" width="100%" bg="white" borderRadius="2xl" py={4}>
				<Button
					colorScheme="primary"
					onClick={handleClick}
					isLoading={buttonLoading}
				>
					PLAY
				</Button>
				<Center>
					<TriviaRoulette />
				</Center>
				<Text color="gray.700">{trivia}</Text>
			</Container>
		</Box>
	)
}

export default Home
