import { generateTrivia } from '@/lib/trivia/generateTrivia'
import { TriviaTopic } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		topic: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const topic = params.topic as TriviaTopic
	//await new Promise((resolve) => setTimeout(resolve, 3000))
	const response = await generateTrivia(topic || 'Entertainment')

	return NextResponse.json({ ...response })
}
