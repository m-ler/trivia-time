import { userKeyState } from '@/store/user-key'
import { TriviaAPIResponse, TriviaObject, TriviaTopic } from '@/types'
import axios from 'axios'
import { useRef } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const useTriviaRequest = () => {
	const { key: apiKey } = userKeyState((state) => state)
	const topicRef = useRef('')
	const queryClient = useQueryClient()
	const queryKey = ['triviaRequest']

	const triviaQuery = useQuery(
		queryKey,
		() =>
			axios.post<TriviaAPIResponse>(`api/trivia/${topicRef.current}`, {
				apiKey,
			}),
		{
			enabled: false,
			staleTime: Infinity,
			retry: 0,
		}
	)

	const requestTrivia = (topic: TriviaTopic) => {
		topicRef.current = topic
		queryClient.cancelQueries(queryKey)
		triviaQuery.refetch({})
	}

	const trivia: TriviaObject = triviaQuery.data?.data.trivia ? JSON.parse(triviaQuery.data.data.trivia) : null
	const apiError = triviaQuery.data?.data.error

	return { requestTrivia, triviaQuery, trivia, apiError }
}

export default useTriviaRequest
