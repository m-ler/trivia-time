import { SFX_LIST, TRIVIA_OPTIONS, TRIVIA_TOPICS } from '@/config/constants'
import { Prisma } from '@prisma/client'

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
export type SFX = (typeof SFX_LIST)[number]

export type UserWithProfile = Prisma.UserGetPayload<{
	include: {
		profile: true
	}
}>
