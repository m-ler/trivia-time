import { TRIVIA_TOPICS_ICONS } from '@/config/constants'
import { triviaDialogState } from '@/store/trivia-dialog'
import { Icon, Stack, Text } from '@chakra-ui/react'
import anime from 'animejs'
import { useEffect, useState } from 'react'

const animate = (onComplete: () => void) => {
	anime({
		targets: ['#topic-animation'],
		scale: [0, 1.2],
		loop: 2,
		direction: 'alternate',
		duration: 2000 / 2,
		complete: onComplete,
	})
}

type Props = {
	show: boolean
	onAnimationComplete: () => void
}

const TopicAnimation = ({ show, onAnimationComplete }: Props) => {
	const { topic } = triviaDialogState((state) => state)
	const [sfx, setSFX] = useState<HTMLAudioElement | null>(null)

	useEffect(() => {
		setSFX(new Audio('/audio/topic_animation.mp3'))
	}, [])

	useEffect(() => {
		if (!show) return
		animate(onAnimationComplete)
		sfx?.play()
	}, [topic, show])

	if (!topic) return <></>

	return show ? (
		<Stack alignItems="center" p={8} gap={4} id="topic-animation">
			<Icon boxSize="10" as={TRIVIA_TOPICS_ICONS[topic]} margin="auto" color={topic.toLowerCase()} />
			<Text
				fontSize={18}
				fontWeight="bold"
				textAlign="center"
				bg={topic.toLowerCase()}
				color="whiteAlpha.800"
				px={4}
				py={2}
				borderRadius="lg"
			>
				{topic}
			</Text>
		</Stack>
	) : (
		<></>
	)
}

export default TopicAnimation
