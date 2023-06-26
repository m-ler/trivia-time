import { SFX_LIST } from '@/config/constants'
import { SFX } from '@/types'
import { useEffect } from 'react'

const audioList: { [key in SFX | string]: HTMLAudioElement | null } = {}

const useSFX = () => {
	useEffect(() => {
		SFX_LIST.forEach((sfx) => {
			audioList[sfx] = new Audio(`/audio/${sfx}.mp3`)
		})
	}, [])

	const playSFX = (sfx: SFX) => {
		const audio = audioList[sfx]
		if (!audio) return

		const volume = window?.volume || 100
		audio.volume = volume / 100
		audio.currentTime = 0
		audio.play()
	}

	return { playSFX }
}

export default useSFX
