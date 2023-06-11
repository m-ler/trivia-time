const errorMessages: { [key: string]: string[] } = {
	'401': [
		'Invalid Authentication',
		'Incorrect API key provided',
		'You must be a member of an organization to use the API',
	],
	'429': [
		'Rate limit reached for requests. You are sending requests too quickly.',
		'You exceeded your current quota, please check your plan and billing details',
		'The engine is currently overloaded, please try again later',
	],
	'500': ['The server had an error while processing your request'],
}

export const getErrorMessages = (httpErrorCode: string) => errorMessages[httpErrorCode]
