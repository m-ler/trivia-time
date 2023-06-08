import { TRIVIA_TOPICS_ICONS } from '@/config/constants'
import { TriviaTopic } from '@/types'
import { Icon, Stack, Text } from '@chakra-ui/react'
import anime from 'animejs'
import { useEffect } from 'react'

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
	topic: TriviaTopic | null
	onAnimationComplete: () => void
}

const TopicAnimation = ({ topic, onAnimationComplete }: Props) => {
	useEffect(() => {
		animate(onAnimationComplete)
	}, [topic])

	if (!topic) return <></>

	return (
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
	)
}

export default TopicAnimation
