import { Configuration, OpenAIApi } from 'openai'

export const openaiAPI = (apiKey: string) =>
	new OpenAIApi(
		new Configuration({
			apiKey,
		})
	)
