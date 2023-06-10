import { TRIVIA_TOPICS_ICONS } from '@/config/constants'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { TriviaTopic } from '@/types'
import { Icon, Spinner, Stack, Text } from '@chakra-ui/react'
import TriviaOption from './TriviaOption'

type Props = {
	topic: TriviaTopic | null
}

const Trivia = ({ topic }: Props) => {
	const { triviaQuery, triviaObj } = useTriviaRequest()

	if (!topic) return <></>
	console.log(triviaObj)

	return (
		<Stack alignItems="center" py={4}>
			<Stack direction="row" alignItems="center" bg={topic.toLowerCase()} p={2} borderRadius="md">
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
						{triviaObj?.trivia}
					</Text>
					<TriviaOption text={triviaObj.a} correct={triviaObj.correct === 'a'} />
					<TriviaOption text={triviaObj.b} correct={triviaObj.correct === 'b'} />
					<TriviaOption text={triviaObj.c} correct={triviaObj.correct === 'c'} />
					<TriviaOption text={triviaObj.d} correct={triviaObj.correct === 'd'} />
				</Stack>
			)}
		</Stack>
	)
}

export default Trivia
