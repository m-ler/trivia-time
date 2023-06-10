import { generateTrivia } from '@/trivia/generateTrivia'
import { TriviaTopic } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	const topic = req.nextUrl.searchParams.get('topic') as TriviaTopic
	const response = await generateTrivia(topic || 'Entertainment')
	return NextResponse.json(response)
}
