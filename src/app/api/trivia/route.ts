import { openaiAPI } from '@/lib/openai/api'
import { NextRequest, NextResponse } from 'next/server'

const triviaFormat =
	'{trivia: "question", a: "option a", b: "option b", c: "option c", d: "option d", correct: "a, b, c or d", explanation: ""}'

const prompt = (topic: string) =>
	`Give me a trivia told by a philosophy teacher about the ${topic}. The trivia must have 4 options where only 1 is correct and should strictly follow this JSON format: ${triviaFormat}. Return the JSON string only.`

export const GET = async (req: NextRequest) => {
	const topic = req.nextUrl.searchParams.get('topic')

	const response = await openaiAPI.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content: prompt(topic || '') }],
		temperature: 1,
	})

	console.log(response.data.choices[0])

	return NextResponse.json(JSON.stringify(response.data.choices[0].message?.content))
}
