import { Box } from '@chakra-ui/react'

type Props = {
	index: number
	color: string
}
const RouletteItem = ({ index, color }: Props) => {
	return (
		<Box
			inset="0"
			position="absolute"
			zIndex={0}
			clipPath="polygon(0% 0%, 88% 0%, 50% 50%, 12% 0%)"
			backgroundColor={color}
			transform={`rotate(${(360 / 5) * index}deg)`}
		>
			<span
				style={{
					display: 'block',
					transform: 'translate(-50%, -50%)',
					position: 'absolute',
					top: '25%',
					left: '50%',
					fontSize: 32,
				}}
			>
				{index + 1}
			</span>
		</Box>
	)
}
//transform={`rotate(${(360 / itemsNumber) * index}deg)`}
export default RouletteItem
