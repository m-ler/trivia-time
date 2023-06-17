'use client'
import { Box } from '@chakra-ui/react'

const Background = () => {
	return (
		<>
			<Box position="fixed" inset={0} bgGradient="linear(to-tr, #576DEC, #2E92F2)" zIndex={-2} />
		</>
	)
}

export default Background
