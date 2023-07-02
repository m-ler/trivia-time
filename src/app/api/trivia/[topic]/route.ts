import { generateTrivia } from '@/lib/trivia/generateTrivia'
import { TriviaTopic } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		topic: string
	}
}

type BodyParams = {
	apiKey: string
}

export const POST = async (req: NextRequest, { params }: Params) => {
	const topic = params.topic as TriviaTopic
	const body: BodyParams = await req.json()
	const { apiKey } = body
	await new Promise((resolve) => setTimeout(resolve, 8000))
	const response = await generateTrivia(topic || 'Entertainment', apiKey)

	return NextResponse.json({ ...response })
}
