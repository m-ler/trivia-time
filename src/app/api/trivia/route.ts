import { BingChat } from 'bing-chat'
import { NextRequest, NextResponse } from 'next/server'

const triviaFormat =
	'{trivia: "question", a: "option a", b: "option b", c: "option c", d: "option d", correct: "a, b, c or d"}'

const prompt = (topic: string) =>
	`Give me a trivia told by a philosophy teacher about the ${topic}. The trivia must have 4 options where only 1 is correct and should strictly follow this JSON format: ${triviaFormat}. Return the JSON string only.`

export const GET = async (req: NextRequest) => {
	const topic = req.nextUrl.searchParams.get('topic')

	const bingChat = new BingChat({ cookie: 'cookie' })
	const response = await bingChat.sendMessage(prompt(topic || ''), {
		variant: 'Creative',
	})
	console.log('------------------- TRIVIA ---------------------')

	const text = response.text
	console.log(text)

	return NextResponse.json(text)
}
