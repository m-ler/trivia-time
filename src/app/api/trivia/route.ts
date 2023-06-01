import { BingChat } from 'bing-chat'
import { NextResponse } from 'next/server'

const triviaFormat =
	'{trivia: "question", a: "option a", b: "option b", c: "option c", d: "option d", correct: "a, b, c or d"}'

const prompt = `Create a trivia about technology with 4 options where only 1 is correct. The trivia should strictly follow this JSON format: ${triviaFormat}. Return the JSON string only.`

export const GET = async () => {
	const bingChat = new BingChat({ cookie: 'cookie' })
	const response = await bingChat.sendMessage(prompt, {
		variant: 'Creative',
	})
	console.log('------------------- TRIVIA ---------------------')

	const text = response.text
	console.log(text)

	return NextResponse.json({ trivia: text })
}
