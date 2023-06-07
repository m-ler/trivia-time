import { create } from 'zustand'

type TriviaState = {
	
	connected: boolean
	//setConnected: (value: boolean) => void
}

export const triviaState = create<TriviaState>((set) => ({
	connected: false,
	//setConnected: (value) => set({ connected: value }),
}))
