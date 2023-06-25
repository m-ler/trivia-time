//eslint-disable-next-line
import NextAuth from 'next-auth/next'
import { Profile } from '@prisma/client'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: DefaultSession['user'] & {
			id: string
			profile: Profile
		}
	}
}
