import { TriviaTopic } from '@/types'
import { create } from 'zustand'

type TriviaDialogState = {
	open: boolean
	topic: TriviaTopic | null
	setOpen: (value: boolean) => void
	setTopic: (value: TriviaTopic | null) => void
}

export const triviaDialogState = create<TriviaDialogState>((set) => ({
	open: false,
	setOpen: (value) => set({ open: value }),
	topic: null,
	setTopic: (value) => set({ topic: value }),
}))
