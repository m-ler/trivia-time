import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserKeyState = {
	key: string
	setKey: (value: string) => void
}

export const userKeyState = create<UserKeyState>()(
	persist(
		(set) => ({
			key: '',
			setKey: (value) => set({ key: value }),
		}),
		{
			name: 'userKey',
		}
	)
)
