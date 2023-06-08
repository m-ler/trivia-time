'use client'

import { Box, Center, Container } from '@chakra-ui/react'
import TriviaRoulette from './trivia-roulette'
import { useState } from 'react'
import TriviaDialog from './trivia-dialog'
import { TriviaTopic } from '@/types'
import useTriviaRequest from '@/hooks/useTriviaRequest'

const MainMenu = () => {
	const [triviaTopic, setTriviaTopic] = useState<TriviaTopic | null>(null)
	const { requestTrivia } = useTriviaRequest()

	const onSpinStart = (topic: TriviaTopic) => {
		requestTrivia(topic)
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
