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
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET, NEXTAUTH_URL } from '@/config'
import { Profile } from '@prisma/client'

const authConfig: NextAuthOptions = {
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GoogleProvider({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
		}),
		GithubProvider({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
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

				if (!user || !correctPassword || !schemaValidation.success) {
					throw new Error('Your email or password was incorrect. Please double-check your credentials.')
				}

				return user
			},
		}),
	],
	pages: {
		signIn: `${NEXTAUTH_URL}/signin`,
	},
	callbacks: {
		signIn: async ({ user }) => Boolean(user.email),
		session: async ({ session, token }) => {
			const userId = token.id as string
			session.user.id = userId
			const userData = await prisma.user.findUnique({
				where: { id: userId },
				include: { profile: true },
			})

			const invalidProfile = !userData?.profile && userData?.id
			const profile = invalidProfile
				? await prisma.profile.create({ data: { userId: userData.id } })
				: (userData?.profile as Profile)

			session.user.profile = profile
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
	secret: NEXTAUTH_SECRET,
}

export default authConfig
