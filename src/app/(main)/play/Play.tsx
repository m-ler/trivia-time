'use client'

import Trivia from '@/components/trivia/Trivia'
import APIError from '@/components/trivia/APIError'
import TriviaRoulette from '@/components/trivia/roulette'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { currentTriviaState } from '@/store/currentTrivia'
import { TriviaTopic } from '@/types'
import { Box, Center, Collapse, Container, Flex, Stack } from '@chakra-ui/react'
import TriviaLoadingState from '@/components/trivia/TriviaLoadingState'

const Play = () => {
	const currentTrivia = currentTriviaState((state) => state)
	const { requestTrivia } = useTriviaRequest()
	const { triviaQuery, apiError, trivia } = useTriviaRequest()

	const onSpinStart = (topic: TriviaTopic) => {
		requestTrivia(topic)
	}

	const onSpinEnd = (topic: TriviaTopic) => {
		currentTrivia.setTopic(topic)
		currentTrivia.setOpen(true)
	}

	const isError = Boolean(triviaQuery.error || apiError)

	return (
		<Box as="main" width="100%" px={4} py={8}>
			<Container maxW="6xl" width="100%" bg="white" borderRadius="3xl" py={4}>
				<Flex justifyContent="center" columnGap={12} flexWrap="wrap" maxW="full" alignItems="center">
					<Center maxW="full">
						<TriviaRoulette onSpinStart={onSpinStart} onSpinEnd={onSpinEnd} />
					</Center>
					<Collapse in={currentTrivia.open} unmountOnExit>
						<Box maxW="550px">
							<Stack w="full" alignItems="center" py={4} transitionDuration="200ms">
								{triviaQuery.isFetching ? (
									<TriviaLoadingState />
								) : isError ? (
									<APIError errorCode={triviaQuery.data?.data.errorCode || ''} />
								) : trivia ? (
									<Trivia />
								) : (
									<></>
								)}
							</Stack>
						</Box>
					</Collapse>
				</Flex>
			</Container>
		</Box>
	)
}

export default Play

/*

<Box>
						{showIntroAnimation || !introAnimationEnded.current ? (
							<TopicAnimation onAnimationComplete={onIntroAnimationEnd} />
						) : (
							<Stack w="full" alignItems="center" py={4}>
								{triviaQuery.isFetching ? (
									<Stack alignItems="center" p={4}>
										<Text>🤖 Thinking...</Text>
										<Spinner />
									</Stack>
								) : isError ? (
									<APIError errorCode={triviaQuery.data?.data.errorCode || ''} />
								) : trivia ? (
									<Trivia />
								) : (
									<></>
								)}
							</Stack>
						)}
					</Box>
*/
