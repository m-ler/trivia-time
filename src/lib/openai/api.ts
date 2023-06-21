import { OPENAI_API_KEY } from '@/config'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
})

export const openaiAPI = new OpenAIApi(configuration)
