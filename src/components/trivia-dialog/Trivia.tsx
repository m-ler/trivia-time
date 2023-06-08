import { TRIVIA_TOPICS_ICONS } from '@/config/constants'
import useTriviaRequest from '@/hooks/useTriviaRequest'
import { TriviaTopic } from '@/types'
import {  Button, Icon, Spinner, Stack, Text } from '@chakra-ui/react'

type Props = {
	topic: TriviaTopic | null
}

const Trivia = ({ topic }: Props) => {
	const { triviaQuery, triviaObj } = useTriviaRequest()
	console.log(triviaObj)

	if (!topic) return <></>

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
				<Stack py={4}>
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
					<Button>{triviaObj?.a}</Button>
					<Button>{triviaObj?.b}</Button>
					<Button>{triviaObj?.c}</Button>
					<Button>{triviaObj?.d}</Button>
				</Stack>
			)}
		</Stack>
	)
}

export default Trivia
