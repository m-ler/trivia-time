import { z } from 'zod'

const signInSchema = z.object({
	email: z.string().email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(6, 'Password must be 6 or more characters long.')
		.max(30, 'Password must be 256 or fewer characters long.'),
})

export default signInSchema
