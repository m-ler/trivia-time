import useSFX from '@/hooks/useSFX'
import { Button } from '@chakra-ui/react'
import anime from 'animejs'
import { useEffect } from 'react'

type Props = {
	text: string
	correct: boolean
	index: number
	revealAnswer: boolean
	onClick: (correct: boolean) => void
}

const animate = (buttonId: string, delay: number, playSFX: () => void) => {
	anime({
		targets: [`#${buttonId}`],
		scale: [0, 1],
		duration: 300,
		easing: 'easeOutBack',
		delay,
	})

	setTimeout(playSFX, delay)
}

const TriviaOptionButton = ({ text, correct, index, revealAnswer, onClick }: Props) => {
	const buttonId = `trivia-option-${index}`
	const colorScheme = correct ? 'green' : 'orange'
	const { playSFX } = useSFX()

	useEffect(() => {
		animate(buttonId, 300 * index, () => playSFX('pop1'))
	}, [])

	const handleClick = () => {
		if (revealAnswer) return

		playSFX(correct ? 'correct_answer' : 'wrong_answer')
		onClick(correct)
	}

	return (
		<Button
			pointerEvents={revealAnswer ? 'none' : 'all'}
			id={buttonId}
			display="block"
			height="auto"
			p={{ base: 3, sm: 4 }}
			fontSize={{ base: 14, sm: 16 }}
			whiteSpace="normal"
			textAlign="center"
			colorScheme={revealAnswer ? colorScheme : 'gray'}
			onClick={handleClick}
		>
			{text}
		</Button>
	)
}

export default TriviaOptionButton
