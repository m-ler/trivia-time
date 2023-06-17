import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const chakraTheme: ThemeConfig = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'white',
			},
		},
	},
	colors: {
		neutral: {
			50: '#eceff1',
			100: '#cfd8dc',
			200: '#b0bec5',
			300: '#90a4ae',
			400: '#78909c',
			500: '#607d8b',
			600: '#546e7a',
			700: '#455a64',
			800: '#37474f',
			900: '#263238',
		},
		art: '#ff1275',
		entertainment: '#ffac12',
		geography: '#14D64B',
		history: '#12b0ff',
		science: '#9238FF',
	},
	fonts: {
		heading: inter.style.fontFamily,
		body: inter.style.fontFamily,
	},
})
