//eslint-disable-next-line
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
		} & Session['user']
	}
}
