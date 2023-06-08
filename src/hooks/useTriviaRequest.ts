import { TriviaObject, TriviaTopic } from '@/types'
import { getRequest } from '@/utils/fetch'
import { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const useTriviaRequest = () => {
	const [triviaObj, setTriviaObj] = useState<TriviaObject | null>(null)
	const topicRef = useRef('')
	const queryClient = useQueryClient()
	const queryKey = ['triviaRequest']
	const triviaQuery = useQuery<string>(queryKey, () => getRequest(`api/trivia?topic=${topicRef.current}`), {
		enabled: false,
		staleTime: Infinity,
		onSettled: (data) => {
			if (data) setTriviaObj(JSON.parse(data))
		},
	})

	const requestTrivia = (topic: TriviaTopic) => {
		topicRef.current = topic
		queryClient.cancelQueries(queryKey)
		triviaQuery.refetch({})
	}

	return { requestTrivia, triviaQuery, triviaObj }
}

export default useTriviaRequest
