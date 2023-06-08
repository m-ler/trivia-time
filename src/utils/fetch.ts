export const getRequest = async <T>(url: string): Promise<T> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error('GET request failed.')
	}
	return response.json()
}
