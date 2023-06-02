export const TRIVIA_TOPICS = [
	'Art',
	'Entertainment',
	'Geography',
	'History',
	'Science',
] as const

export type TriviaTopics = (typeof TRIVIA_TOPICS)[number]
