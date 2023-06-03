import { Box } from '@chakra-ui/react'
import RouletteItem from './RouletteItem'

const TriviaRoulette = () => {
	return (
		<Box
			borderRadius="50%"
			position="relative"
			overflow="hidden"
			border="5px solid"
			boxSizing="content-box"
			borderColor="primary.400"
			w={300}
			aspectRatio="1/1"
		>
			<RouletteItem index={0} color="green.300" />
			<RouletteItem index={1} color="blue.300" />
			<RouletteItem index={2} color="purple.500" />
			<RouletteItem index={3} color="red.300" />
			<RouletteItem index={4} color="yellow.300" />
			<Box
				position="absolute"
				inset="0px"
				border="10px solid"
				borderColor="primary.200"
				borderRadius="50%"
				boxShadow="inset 0px 2px 10px rgba(0,30,20,0.35)"
			></Box>
		</Box>
	)
}

export default TriviaRoulette
