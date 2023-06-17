'use client'

import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren

const Button = ({ children }: Props) => {
	return (
		<Box
			as="button"
			p={4}
			color="white"
			fontWeight="bold"
			borderRadius="md"
			bgGradient="linear(to-r, teal.500, green.500)"
			_hover={{
				bgGradient: 'linear(to-r, red.500, yellow.500)',
			}}
		>
			{children}
		</Box>
	)
}

export default Button
