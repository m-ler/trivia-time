'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { chakraTheme } from './chakra-theme'

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<CacheProvider>
			<ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
		</CacheProvider>
	)
}

export default Providers
