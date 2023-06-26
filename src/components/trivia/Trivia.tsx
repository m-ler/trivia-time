import { TRIVIA_OPTIONS, TRIVIA_TOPICS_ICONS } from '@/config/constants'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { Button, Flex, Icon, Progress, Stack, Text } from '@chakra-ui/react'
import TriviaOptionButton from './TriviaOptionButton'
import { currentTriviaState } from '@/store/currentTrivia'
import { useEffect, useRef, useState } from 'react'
import { TriviaObject } from '@/types'
import useSFX from '@/hooks/useSFX'
import { useSession } from 'next-auth/react'
import useUpdateScore from '@/hooks/user/useUpdateScore'

const TIMEOUT = 30

const Trivia = () => {
	const { data: session } = useSession()
	const { updateScore } = useUpdateScore()
	const { trivia } = useTriviaRequest()
	const { topic, setOpen } = currentTriviaState((state) => state)
	const [revealAnswer, setRevealAnswer] = useState(false)
	const timerRef = useRef<number>(0)
	const [seconds, setSeconds] = useState(TIMEOUT)
	const { playSFX } = useSFX()

	const onTimeOut = () => {
		setRevealAnswer(true)
		clearInterval(timerRef.current)
		playSFX('timeout')
	}

	useEffect(() => {
		playSFX('trivia_start')

		timerRef.current = window.setInterval(() => {
			setSeconds((prev) => {
				if (prev <= 0) {
					onTimeOut()
					return prev
				}

				return prev - 1
			})
		}, 1000)
	}, [])

	const onOptionClick = (correct: boolean) => {
		setRevealAnswer(true)
		clearInterval(timerRef.current)
		session && updateScore(correct)
	}

	if (!topic || !trivia) return <></>

	return (
		<Flex w="full" maxW="full" direction="column" gap={2}>
			<Stack bg={topic.toLowerCase()} p={6} borderRadius="lg" mb={4} alignItems="start">
				<Stack w="full" direction="row" justifyContent="space-between" alignItems="flex-start">
					<Stack direction="row" alignItems="center" borderRadius="md">
						<Icon as={TRIVIA_TOPICS_ICONS[topic]} boxSize="4" color="white"></Icon>
						<Text color="white" fontWeight="bold" fontSize={18}>
							{topic.toUpperCase()}
						</Text>
					</Stack>
					<Text color="white" fontWeight="black" hidden={revealAnswer}>
						{seconds}
					</Text>
				</Stack>

				<Text fontWeight="bold" fontSize={18} color="whiteAlpha.800" lineHeight="6">
					{trivia.trivia}
				</Text>
				<Progress
					w="full"
					value={Math.round((seconds * 100) / TIMEOUT)}
					size="xs"
					background="blackAlpha.400"
					sx={{ '&>div': { bg: 'white' } }}
				/>
			</Stack>

			{TRIVIA_OPTIONS.map((x, i) => (
				<TriviaOptionButton
					key={x}
					text={trivia[x as keyof TriviaObject]}
					correct={trivia.correct === x}
					index={i}
					revealAnswer={revealAnswer}
					onClick={onOptionClick}
				/>
			))}
			{revealAnswer && (
				<Button onClick={() => setOpen(false)} ml="auto" mt={6} colorScheme="blue">
					Continue
				</Button>
			)}
		</Flex>
	)
}

export default Trivia
