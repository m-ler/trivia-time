import { openaiAPI } from '@/lib/openai/api'
import { TriviaTopic } from '@/types'
import jsonschema, { Schema } from 'jsonschema'
import { topicList } from './topicList'
import { randomNumber } from '@/utils/math'
import { humanRoles } from './humanRoles'

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

const validateTriviaSchema = (triviaJSON: string) => {
	try {
		JSON.parse(triviaJSON)
	} catch (e) {
		return false
	}

	const { valid } = JSONSchemaValidator.validate(JSON.parse(triviaJSON), triviaSchema)
	return valid
}

const triviaSchemaPromptExample = '{trivia: "question", a: "", b: "", c: "", d: "", correct: "a, b, c or d"}'
const createPrompt = (topic: string, role: string) =>
	`Give me a trivia about ${topic} that a ${role} would say. The trivia must have 4 options where only 1 is correct. Your response is always a JSON file with this schema: ${triviaSchemaPromptExample}`

export const generateTrivia = async (topic: TriviaTopic) => {
	let trivia = ''
	let error: unknown | null = null

	do {
		try {
			const subtopic = [topic, ...topicList[topic]][randomNumber(0, topicList[topic].length)].toLowerCase()
			const role = humanRoles[randomNumber(0, humanRoles.length - 1)].toLowerCase()
			const prompt = createPrompt(subtopic, role)
			console.log(prompt)

			const response = await openaiAPI.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: [{ role: 'user', content: prompt }],
			})
			trivia = response.data.choices[0].message?.content || ''
		} catch (e) {
			error = e
			break
		}
	} while (!validateTriviaSchema(trivia))

	if (error) throw error
	return trivia
}
