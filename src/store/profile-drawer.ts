import { create } from 'zustand'

type ProfileDrawerState = {
	open: boolean
	setOpen: (value: boolean) => void
}

export const profileDrawerState = create<ProfileDrawerState>((set) => ({
	open: false,
	setOpen: (value) => set({ open: value }),
}))
