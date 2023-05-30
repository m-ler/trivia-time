'use client'

import { Box, Button, Container } from '@chakra-ui/react'
import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react'

export const metadata = {
	title: 'Trivia Time!',
}

const configuration = new Configuration({
	apiKey: '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',
})
const openai = new OpenAIApi(configuration)

const Home = () => {
	const [buttonLoading, setButtonLoading] = useState(false)

	const handleClick = async () => {
		setButtonLoading(true)
		const completion = await openai.createCompletion({
			model: 'gpt-3.5-turbo',
			prompt: 'Hello world',
		})

		setButtonLoading(false)
		console.log(completion.data.choices[0].text)
	}

	return (
		<Box as="main" width="100%" px={4} py={8}>
			<Container
				maxW="6xl"
				width="100%"
				bg="white"
				height="100px"
				borderRadius="2xl"
			>
				<Button colorScheme="primary" onClick={handleClick}>
					PLAY
				</Button>
			</Container>
		</Box>
	)
}

export default Home
