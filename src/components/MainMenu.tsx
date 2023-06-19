'use client'

import { Box, Center, Container } from '@chakra-ui/react'
import TriviaRoulette from './trivia-roulette'
import TriviaDialog from './trivia-dialog'
import { TriviaTopic } from '@/types'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { triviaDialogState } from '@/store/trivia-dialog'

const MainMenu = () => {
	const triviaDialog = triviaDialogState((state) => state)
	const { requestTrivia } = useTriviaRequest()

	const onSpinStart = (topic: TriviaTopic) => {
		requestTrivia(topic)
	}

	const onSpinEnd = (topic: TriviaTopic) => {
		triviaDialog.setTopic(topic)
		triviaDialog.setOpen(true)
	}

	return (
		<Box as="main" width="100%" px={4} py={8}>
			<Container maxW="6xl" width="100%" bg="white" borderRadius="3xl" py={4}>
				<Center>
					<TriviaRoulette onSpinStart={onSpinStart} onSpinEnd={onSpinEnd} />
				</Center>
				<TriviaDialog />
			</Container>
		</Box>
	)
}

export default MainMenu
