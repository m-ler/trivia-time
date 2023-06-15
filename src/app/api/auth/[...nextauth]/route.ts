import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma/client'
import { Adapter } from 'next-auth/adapters'

const handler = NextAuth({
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
	],
})

export { handler as GET, handler as POST }
