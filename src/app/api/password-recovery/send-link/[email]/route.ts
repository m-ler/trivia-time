import { NextRequest, NextResponse } from 'next/server'

type Params = {
	params: {
		email: string
	}
}

export const POST = async (req: NextRequest, { params }: Params) => {
	const email = params.email

	return NextResponse
}
