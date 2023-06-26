import { TriviaTopic } from '@/types'
import { create } from 'zustand'

type CurrentTriviaState = {
	open: boolean
	topic: TriviaTopic | null
	setOpen: (value: boolean) => void
	setTopic: (value: TriviaTopic | null) => void
}

export const currentTriviaState = create<CurrentTriviaState>((set) => ({
	open: false,
	setOpen: (value) => set({ open: value }),
	topic: null,
	setTopic: (value) => set({ topic: value }),
}))
