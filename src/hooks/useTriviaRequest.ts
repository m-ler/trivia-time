import { TriviaObject, TriviaTopic } from '@/types'
import { getRequest } from '@/utils/fetch'
import { useRef } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const useTriviaRequest = () => {
	const topicRef = useRef('')
	const queryClient = useQueryClient()
	const queryKey = ['triviaRequest']
	const triviaQuery = useQuery<string>(queryKey, () => getRequest(`api/trivia?topic=${topicRef.current}`), {
		enabled: false,
		staleTime: Infinity,
	})

	const requestTrivia = (topic: TriviaTopic) => { 
		topicRef.current = topic
		queryClient.cancelQueries(queryKey)
		triviaQuery.refetch({})
	}

	const triviaObj: TriviaObject = triviaQuery.data ? JSON.parse(triviaQuery.data) : null

	return { requestTrivia, triviaQuery, triviaObj }
}

export default useTriviaRequest
