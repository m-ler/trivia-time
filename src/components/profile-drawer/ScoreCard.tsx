import { Box, Stack, Text } from '@chakra-ui/react'
import { MdArrowCircleDown, MdArrowCircleUp } from 'react-icons/md'

type Props = {
	score: number
	percentage: number
	type: 'positive' | 'negative'
}
const ScoreCard = ({ score, percentage, type }: Props) => {
	const positive = type === 'positive'
	const color = type === 'positive' ? 'green' : 'red'
	const scoreLabel = `${positive ? '+' : '-'}${score}`

	return (
		<Stack direction="row" bg={`${color}.100`} alignItems="center" spacing={4} px={4} py={2} rounded="md">
			<Box as="span" color={`${color}.500`}>
				{positive ? <MdArrowCircleUp size={28} /> : <MdArrowCircleDown size={28} />}
			</Box>
			<Box>
				<Text fontSize={16} color={`${color}.600`} fontWeight="semibold">
					{positive ? 'Success' : 'Failure'}
				</Text>

				<Text fontSize={12} color={`${color}.500`}>
					<Text
						as="span"
						fontSize={12}
						fontWeight="semibold"
						color={`${color}.500`}
						display={{ base: 'inline', sm: 'none' }}
					>
						{`${scoreLabel} • `}
					</Text>
					{`${percentage}%`}
				</Text>
			</Box>
			<Text
				textAlign="right"
				color={`${color}.600`}
				fontWeight="bold"
				flexGrow={1}
				display={{ base: 'none', sm: 'block' }}
			>
				{scoreLabel}
			</Text>
		</Stack>
	)
}

export default ScoreCard
