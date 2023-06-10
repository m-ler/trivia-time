import { Button } from '@chakra-ui/react'

type Props = {
	text: string
	correct: boolean
}

const TriviaOption = ({ text, correct }: Props) => {
	return (
		<Button display="block" height="auto" p={4} whiteSpace="normal" textAlign="center">
			{text}
		</Button>
	)
}

export default TriviaOption
