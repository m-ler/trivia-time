import { Box, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
	index: number
	color: string
	icon: IconType
}

const RouletteItem = ({ index, color, icon }: Props) => {
	return (
		<Box
			inset="0"
			position="absolute"
			zIndex={0}
			clipPath="polygon(0% 0%, 87% 0%, 50% 50%, 13% 0%)"
			backgroundColor={color}
			transform={`rotate(${(360 / 5) * index}deg)`}
		>
			<Icon
				as={icon}
				color="rgba(0,0,0,0.22)"
				sx={{
					display: 'block',
					transform: 'translate(-50%, -50%)',
					position: 'absolute',
					top: '18%',
					left: '50%',
					w: '15%',
					h: '15%',
				}}
			/>
		</Box>
	)
}
//transform={`rotate(${(360 / itemsNumber) * index}deg)`}
export default RouletteItem
