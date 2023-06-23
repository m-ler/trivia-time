import { create } from 'zustand'

type SettingsDialogState = {
	open: boolean
	setOpen: (value: boolean) => void
}

export const settingsDialogState = create<SettingsDialogState>((set) => ({
	open: false,
	setOpen: (value) => set({ open: value }),
}))
