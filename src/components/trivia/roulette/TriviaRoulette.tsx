'use client'

import { Box } from '@chakra-ui/react'
import RouletteItem from './RouletteItem'
import anime from 'animejs'
import SpinButton from './SpinButton'
import { randomNumber } from '@/utils/math'
import { TRIVIA_TOPICS, TRIVIA_TOPICS_ICONS } from '@/config/constants'
import { TriviaTopic } from '@/types'
import useSFX from '@/hooks/useSFX'
import { useState } from 'react'
import { currentTriviaState } from '@/store/currentTrivia'

const SPIN_FORCE = 360 * 20
const ROTATED_TRIVIA_TOPICS = [TRIVIA_TOPICS[0], ...TRIVIA_TOPICS.slice(1).reverse()]

const animateSpin = (degrees: number, onComplete: () => void, playSFX: () => void) => {
	const rotation = SPIN_FORCE + degrees

	anime({
		targets: ['#trivia-roulette-items'],
		rotate: [0, rotation],
		duration: 4000,
		easing: 'easeOutQuart',
		complete: onComplete,
	})

	const ticks = { ticks: 0, prevTicks: 0 }

	anime({
		targets: [ticks],
		ticks: [0, (rotation / 360) * TRIVIA_TOPICS.length],
		duration: 4000,
		easing: 'easeOutQuart',
		//round: 1,
		update: () => {
			const roundedTicks = Math.round(ticks.ticks)

			if (roundedTicks !== ticks.prevTicks) {
				ticks.prevTicks = roundedTicks
				playSFX()
			}
		},
	})
}

type Props = {
	onSpinStart: (topic: TriviaTopic) => void
	onSpinEnd: (topic: TriviaTopic) => void
}

const TriviaRoulette = ({ onSpinStart, onSpinEnd }: Props) => {
	const { playSFX } = useSFX()
	const [spinning, setSpinning] = useState(false)
	const currentTrivia = currentTriviaState()

	const startTrivia = () => {
		if (spinning) return

		setSpinning(true)
		const degrees = randomNumber(0, 360)
		const topicIndex = Math.round(degrees / (360 / TRIVIA_TOPICS.length)) % TRIVIA_TOPICS.length
		const topic = ROTATED_TRIVIA_TOPICS[topicIndex]
		const onComplete = () => {
			playSFX('click1')
			setTimeout(() => {
				onSpinEnd(topic)
				setSpinning(false)
			}, 700)
		}

		onSpinStart(topic)
		animateSpin(degrees, onComplete, () => playSFX('roulette_tick'))
	}

	return (
		<Box
			borderRadius="50%"
			position="relative"
			overflow="hidden"
			border="6px solid"
			boxSizing="content-box"
			borderColor="blue.500"
			w={340}
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
					<RouletteItem key={i} index={i} color={topic.toLowerCase()} icon={TRIVIA_TOPICS_ICONS[topic]} />
				))}
			</Box>

			<Box position="absolute" inset="10px" borderRadius="50%" boxShadow="inset 0px 2px 10px rgba(0,30,20,0.35)"></Box>

			<SpinButton onClick={startTrivia} disabled={spinning || currentTrivia.open} />
		</Box>
	)
}

export default TriviaRoulette
