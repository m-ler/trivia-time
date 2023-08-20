import { SFX_LIST } from '@/config/constants'
import { SFX } from '@/types'
import { useEffect } from 'react'

const audioList: { [key in SFX | string]: HTMLAudioElement | null } = {}
let audioListLoaded = false

const useSFX = () => {
	useEffect(() => {
		if (audioListLoaded) return
		
		SFX_LIST.forEach((sfx) => {
			audioList[sfx] = new Audio(`/audio/${sfx}.mp3`)
		})
		audioListLoaded = true
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
