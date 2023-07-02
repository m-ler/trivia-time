'use client'

import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'
import CloudLayer from './CloudLayer'

const CLOUD_LAYERS = 3

const Background = () => {
	const cloudLayers = useMemo(
		() =>
			Array(CLOUD_LAYERS)
				.fill(null)
				.map((x, i) => <CloudLayer key={i} />),
		[]
	)

	return (
		<Box position="absolute" inset={0} overflow="hidden" zIndex={-1}>
			<Box position="fixed" inset={0} bgGradient="linear(to-tr, #576DEC, #2E92F2)" zIndex={-3} />
			{cloudLayers}
			<Box position="absolute" inset={0} bg="rgba(63,129,238,0.6)" zIndex={-1}></Box>
		</Box>
	)
}

export default Background
