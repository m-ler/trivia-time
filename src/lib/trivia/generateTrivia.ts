import { openaiAPI } from '@/lib/openai/api'
import { TriviaAPIResponse, TriviaObject, TriviaTopic } from '@/types'
import jsonschema, { Schema } from 'jsonschema'
import { topicList } from './topicList'
import { randomNumber } from '@/utils/math'
import { humanRoles } from './humanRoles'
import { TRIVIA_OPTIONS } from '@/config/constants'

const JSONSchemaValidator = new jsonschema.Validator()

const triviaSchema: Schema = {
	type: 'object',
	properties: {
		trivia: { type: 'string' },
		a: { type: 'string' },
		b: { type: 'string' },
		c: { type: 'string' },
		d: { type: 'string' },
		correct: { type: 'string' },
	},
}

const validateTrivia = (triviaJSON: string) => {
	try {
		JSON.parse(triviaJSON)
	} catch (e) {
		return false
	}

	const validSchema = JSONSchemaValidator.validate(JSON.parse(triviaJSON), triviaSchema).valid
	if (validSchema) {
		const isWhitespaceOrEmpty = /^\s*$/
		const trivia: TriviaObject = JSON.parse(triviaJSON)
		const validStrings = Object.values(trivia).every((x) => !isWhitespaceOrEmpty.test(x))
		const validAnswer = TRIVIA_OPTIONS.some((x) => x === trivia.correct)
		return validStrings && validAnswer
	}

	return false
}

const triviaSchemaPromptExample = '{trivia: "question", a: "", b: "", c: "", d: "", correct: "a, b, c or d"}'
const createPrompt = (topic: string, role: string) =>
	`Generate a trivia about ${topic} that a ${role} would say. The trivia must have 4 options where only 1 is correct. Your response is always a JSON file with this schema: ${triviaSchemaPromptExample}`

type APIError = {
	response?: {
		message?: string
		status?: number
	}
}

const getTrivia = async (topic: TriviaTopic, apiKey: string) => {
	const triviaResponse: TriviaAPIResponse = {}

	try {
		const subtopic = [topic, ...topicList[topic]][randomNumber(0, topicList[topic].length)].toLowerCase()
		const role = humanRoles[randomNumber(0, humanRoles.length - 1)].toLowerCase()
		const prompt = createPrompt(subtopic, role)

		const response = await openaiAPI(apiKey).createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: prompt }],
		})

		triviaResponse.trivia = response.data.choices[0].message?.content || ''
		return triviaResponse
	} catch (error) {
		const status = (error as APIError).response?.status
		triviaResponse.errorCode = status?.toString()
		return triviaResponse
	}
}

export const generateTrivia = async (topic: TriviaTopic, apiKey: string) => {
	let result: TriviaAPIResponse = {}
	const attempts = 3

	for (let i = 0; i < attempts; i++) {
		result = await getTrivia(topic, apiKey)
		const tryAgain = !validateTrivia(result.trivia || '') && !result.error
		if (!tryAgain) break
	}

	result.error = Boolean(result.error) || !validateTrivia(result.trivia || '')

	return result
}
