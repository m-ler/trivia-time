import { extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const chakraTheme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'secondary.500',
			},
		},
	},
	colors: {
		primary: {
			50: '#fff8e1',
			100: '#ffecb3',
			200: '#ffe082',
			300: '#ffd54f',
			400: '#ffca28',
			500: '#ffc107',
			600: '#ffb300',
			700: '#ffa000',
			800: '#ff8f00',
			900: '#ff6f00',
		},
		secondary: {
			50: '#ede7f6',
			100: '#d1c4e9',
			200: '#b39ddb',
			300: '#9575cd',
			400: '#7e57c2',
			500: '#673ab7',
			600: '#5e35b1',
			700: '#512da8',
			800: '#4527a0',
			900: '#311b92',
		},
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
		art: '#f44336',
		entertainment: '#ffc107',
		geography: '#4caf50',
		history: '#03a9f4',
		science: '#673ab7',
	},
	fonts: {
		heading: inter.style.fontFamily,
		body: inter.style.fontFamily,
	},
})
