import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma/client'
import { Adapter } from 'next-auth/adapters'
import { compare } from 'bcrypt'
import signInSchema from '../zod/signInSchema'
import { z } from 'zod'
import { NextAuthOptions } from 'next-auth'

const authConfig: NextAuthOptions = {
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || '',
			clientSecret: process.env.GOOGLE_SECRET || '',
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
		CredentialsProvider({
			type: 'credentials',
			name: 'Email',
			credentials: {},
			async authorize(credentials) {
				const formData = credentials as z.infer<typeof signInSchema>
				const { email, password } = formData
				const schemaValidation = signInSchema.safeParse(formData)

				const user = await prisma.user.findUnique({ where: { email: email || '' } })
				const correctPassword = await compare(password, user?.password || '')

				console.log('user', Boolean(user))
				console.log('password', Boolean(email))
				console.log('schema', schemaValidation.success)

				if (!user || !correctPassword || !schemaValidation.success) {
					throw new Error('Your email or password was incorrect. Please double-check your credentials.')
				}

				return user
			},
		}),
	],
	pages: {
		signIn: `${process.env.NEXTAUTH_URL}/signin`,
	},
	callbacks: {
		session({ session, token }) {
			session.user.id = token.id
			return session
		},
		jwt({ token, account, user }) {
			if (account) {
				token.accessToken = account.access_token
				token.id = user.id
			}

			return token
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
}

export default authConfig
