'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { chakraTheme } from './chakra-theme'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider>
				<ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
			</CacheProvider>
		</QueryClientProvider>
	)
}

export default Providers
