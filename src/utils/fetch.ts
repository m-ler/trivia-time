export const getRequest = async <T>(url: string): Promise<T> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error('GET request failed.')
	}
	return response.json()
}

export const postRequest = async <T>(url: string, data?: unknown): Promise<T> => {
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	})
	if (!response.ok) {
		throw new Error('POST request failed.')
	}
	return response.json()
}
