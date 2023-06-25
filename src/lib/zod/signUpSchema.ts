import { z } from 'zod'

const signUpSchema = z.object({
	email: z.string().email({ message: 'Invalid email address.' }),
	username: z
		.string()
		.min(3, 'Username must be 3 or more characters long.')
		.max(30, 'Username must be 30 or fewer characters long.'),
	password: z
		.string()
		.min(6, 'Password must be 6 or more characters long.')
		.max(30, 'Password must be 256 or fewer characters long.'),
})

export default signUpSchema
