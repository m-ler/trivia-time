import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})

export const openaiAPI = new OpenAIApi(configuration)
