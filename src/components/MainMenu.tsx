'use client'

import { Box, Button, Center, Container, Text } from '@chakra-ui/react'
import TriviaRoulette from './trivia-roulette'
import { useState } from 'react'
import TriviaDialog from './TriviaDialog'
import { TriviaTopic } from '@/types'

type TriviaResponse = {
	trivia: string
}

const MainMenu = () => {
	const [triviaTopic, setTriviaTopic] = useState<TriviaTopic | null>(null)
	//const [buttonLoading, setButtonLoading] = useState(false)
	//const [trivia, setTrivia] = useState('')

	/* const handleClick = async () => {
		setButtonLoading(true)
		const response = await fetch('api/trivia')
		const text = await response.text()
		const triviaResult: TriviaResponse = JSON.parse(text)

		setButtonLoading(false)
		setTrivia(triviaResult.trivia || '')
	} */

	const onSpinStart = (topic: TriviaTopic) => {
		//
	}

	const onSpinEnd = (topic: TriviaTopic) => {
		setTriviaTopic(topic)
	}

	return (
		<Box as="main" width="100%" px={4} py={8}>
			<Container maxW="6xl" width="100%" bg="white" borderRadius="2xl" py={4}>
				<Center>
					<TriviaRoulette onSpinStart={onSpinStart} onSpinEnd={onSpinEnd} />
				</Center>
				<TriviaDialog triviaTopic={triviaTopic} onClose={() => setTriviaTopic(null)} />
			</Container>
		</Box>
	)
}

export default MainMenu
