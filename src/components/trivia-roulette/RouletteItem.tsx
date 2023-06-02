import { Box } from '@chakra-ui/react'

type Props = {
	index: number
	itemsNumber: number
	color: string
}
const RouletteItem = ({ index, color, itemsNumber }: Props) => {
	return (
		<Box
			inset="0px"
			position="absolute"
			zIndex={0}
			border="150px solid"
			borderColor="transparent"
			borderLeftColor={color}
			transform={`scale(1.1) rotate(${(360 / itemsNumber) * index}deg)`}
		></Box>
	)
}

export default RouletteItem
