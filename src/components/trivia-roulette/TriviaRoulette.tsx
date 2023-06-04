import { Box } from '@chakra-ui/react'
import RouletteItem from './RouletteItem'
import anime from 'animejs'
import SpinButton from './SpinButton'
import { randomNumber } from '@/utils/math'
import { TRIVIA_TOPICS, TRIVIA_TOPICS_ICONS } from '@/config/constants'

const animateSpin = () => {
	const speed = 8000
	const degrees = randomNumber(0, 360)
	const rotate = speed + degrees

	anime({
		targets: '#trivia-roulette-items',
		rotate: [0, rotate],
		duration: 5000,
		easing: 'easeOutExpo',
	})
}

const TriviaRoulette = () => {
	const startTrivia = () => {
		animateSpin()
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
					<RouletteItem
						key={i}
						index={i}
						color={topic.toLowerCase()}
						icon={TRIVIA_TOPICS_ICONS[i]}
					/>
				))}
			</Box>

			<Box
				position="absolute"
				inset="0px"
				borderRadius="50%"
				boxShadow="inset 0px 2px 10px rgba(0,30,20,0.25)"
			></Box>

			<SpinButton onClick={startTrivia} />
		</Box>
	)
}

export default TriviaRoulette
