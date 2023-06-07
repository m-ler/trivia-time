'use client'

import { Box } from '@chakra-ui/react'
import RouletteItem from './RouletteItem'
import anime from 'animejs'
import SpinButton from './SpinButton'
import { randomNumber } from '@/utils/math'
import { TRIVIA_TOPICS, TRIVIA_TOPICS_ICONS } from '@/config/constants'
import { useEffect, useState } from 'react'
import { TriviaTopic } from '@/types'

const SPIN_FORCE = 360 * 20
const ROTATED_TRIVIA_TOPICS = [TRIVIA_TOPICS[0], ...TRIVIA_TOPICS.slice(1).reverse()]

const animateSpin = (degrees: number, onComplete: () => void, tickSFX: HTMLAudioElement | null) => {
	const rotation = SPIN_FORCE + degrees

	anime({
		targets: ['#trivia-roulette-items'],
		rotate: [0, rotation],
		duration: 5000,
		easing: 'easeOutExpo',
		complete: onComplete,
	})

	const ticks = { ticks: 0, prevTicks: 0 }

	if (!tickSFX) return
	tickSFX.volume = 0.5

	anime({
		targets: [ticks],
		ticks: [0, (rotation / 360) * TRIVIA_TOPICS.length],
		duration: 5000,
		easing: 'easeOutExpo',
		//round: 1,
		update: () => {
			const roundedTicks = Math.round(ticks.ticks)

			if (roundedTicks !== ticks.prevTicks) {
				ticks.prevTicks = roundedTicks
				tickSFX.currentTime = 0
				tickSFX.play()
			}
		},
	})
}

type Props = {
	onSpinStart: (topic: TriviaTopic) => void
	onSpinEnd: (topic: TriviaTopic) => void
}

const TriviaRoulette = ({ onSpinStart, onSpinEnd }: Props) => {
	const [tickSFX, setTickSFX] = useState<HTMLAudioElement | null>(null)

	useEffect(() => {
		setTickSFX(new Audio('/audio/roulette_tick.mp3'))
	}, [])

	const startTrivia = () => {
		const degrees = randomNumber(0, 360)
		const topicIndex = Math.round(degrees / (360 / TRIVIA_TOPICS.length)) % TRIVIA_TOPICS.length
		const topic = ROTATED_TRIVIA_TOPICS[topicIndex]
		const onComplete = () => onSpinEnd(topic)

		onSpinStart(topic)
		animateSpin(degrees, onComplete, tickSFX)
	}

	return (
		<Box
			m="10px"
			borderRadius="50%"
			position="relative"
			overflow="hidden"
			border="6px solid"
			boxSizing="content-box"
			borderColor="gray.400"
			w={300}
			aspectRatio="1/1"
		>
			<Box
				id="trivia-roulette-items"
				position="absolute"
				inset="0"
				borderRadius="50%"
				border="10px solid"
				borderColor="white"
				overflow="hidden"
			>
				{TRIVIA_TOPICS.map((topic, i) => (
					<RouletteItem key={i} index={i} color={topic.toLowerCase()} icon={TRIVIA_TOPICS_ICONS[i]} />
				))}
			</Box>

			<Box position="absolute" inset="10px" borderRadius="50%" boxShadow="inset 0px 2px 10px rgba(0,30,20,0.35)"></Box>

			<SpinButton onClick={startTrivia} />
		</Box>
	)
}

export default TriviaRoulette
