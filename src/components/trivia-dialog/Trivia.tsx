import { TRIVIA_OPTIONS, TRIVIA_TOPICS_ICONS } from '@/config/constants'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { Button, Icon, Progress, Stack, Text } from '@chakra-ui/react'
import TriviaOptionButton from './TriviaOptionButton'
import { triviaDialogState } from '@/store/trivia-dialog'
import { useEffect, useRef, useState } from 'react'
import { TriviaObject } from '@/types'

const TIMEOUT = 30

const Trivia = () => {
	const { trivia } = useTriviaRequest()
	const { topic, setOpen } = triviaDialogState((state) => state)
	const [revealAnswer, setRevealAnswer] = useState(false)
	const timerRef = useRef<number>(0)
	const [seconds, setSeconds] = useState(TIMEOUT)

	useEffect(() => {
		new Audio('/audio/trivia_start.mp3').play()

		timerRef.current = window.setInterval(() => {
			setSeconds((prev) => {
				if (prev <= 0) {
					clearInterval(timerRef.current)
					return prev
				}

				return prev - 1
			})
		}, 1000)
	}, [])

	const onOptionClick = (correct: boolean) => {
		setRevealAnswer(true)
		clearInterval(timerRef.current)
	}

	if (!topic || !trivia) return <></>

	return (
		<Stack w="full" maxW="full">
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
				<Button onClick={() => setOpen(false)} ml="auto !important" mt="2rem !important" colorScheme="secondary">
					Continue
				</Button>
			)}
		</Stack>
	)
}

export default Trivia
