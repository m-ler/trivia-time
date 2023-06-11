import { TRIVIA_TOPICS_ICONS } from '@/config/constants'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { TriviaTopic } from '@/types'
import { Icon, Spinner, Stack, Text } from '@chakra-ui/react'
import TriviaOption from './TriviaOption'
import APIError from './APIError'

type Props = {
	topic: TriviaTopic | null
	onClose: () => void
}

const Trivia = ({ topic, onClose }: Props) => {
	const { triviaQuery, trivia, apiError } = useTriviaRequest()

	if (!topic) return <></>
	const isError = Boolean(triviaQuery.error || apiError)

	return (
		<Stack alignItems="center" py={4}>
			<Stack direction="row" alignItems="center" bg={topic.toLowerCase()} p={2} borderRadius="md" hidden={isError}>
				<Icon as={TRIVIA_TOPICS_ICONS[topic]} boxSize="4" color="white"></Icon>
				<Text color="white" fontWeight="bold" fontSize={12}>
					{topic.toUpperCase()}
				</Text>
			</Stack>
			{triviaQuery.isFetching ? (
				<Stack alignItems="center" p={4}>
					<Text>🤖 Thinking...</Text>
					<Spinner />
				</Stack>
			) : isError ? (
				<APIError errorCode={apiError || ''} onClose={onClose} />
			) : (
				<Stack py={4} maxW="full">
					<Text
						bg={topic.toLowerCase()}
						p={4}
						fontWeight="bold"
						fontSize={16}
						textAlign="center"
						borderRadius="md"
						color="white"
						mb={4}
					>
						{trivia.trivia}
					</Text>
					<TriviaOption text={trivia.a} correct={trivia.correct === 'a'} />
					<TriviaOption text={trivia.b} correct={trivia.correct === 'b'} />
					<TriviaOption text={trivia.c} correct={trivia.correct === 'c'} />
					<TriviaOption text={trivia.d} correct={trivia.correct === 'd'} />
				</Stack>
			)}
		</Stack>
	)
}

export default Trivia
