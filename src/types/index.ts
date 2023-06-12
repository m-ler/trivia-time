import { TRIVIA_OPTIONS, TRIVIA_TOPICS } from '@/config/constants'

export type TriviaTopic = (typeof TRIVIA_TOPICS)[number]

export type TriviaObject = {
	trivia: string
	a: string
	b: string
	c: string
	d: string
	correct: string
}

export type TriviaAPIResponse = {
	error?: boolean
	errorCode?: string
	trivia?: string
}

export type TriviaOption = (typeof TRIVIA_OPTIONS)[number]
