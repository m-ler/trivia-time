'use client'

import { Box } from '@chakra-ui/react'
import Cloud from './Cloud'
import { useMemo } from 'react'

const Background = () => {
	const clouds = useMemo(
		() =>
			Array(70)
				.fill(null)
				.map((x, i) => <Cloud key={i} />),
		[]
	)

	return (
		<Box position="absolute" inset={0} overflow="hidden" zIndex={-1}>
			<Box position="fixed" inset={0} bgGradient="linear(to-tr, #576DEC, #2E92F2)" zIndex={-3} />
			{clouds}
			<Box position="absolute" inset={0} bg="rgba(63,129,238,0.6)" zIndex={-1}></Box>
		</Box>
	)
}

export default Background
