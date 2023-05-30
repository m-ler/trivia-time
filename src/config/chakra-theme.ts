import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'secondary.400',
				color: 'white',
			},
		},
	},
	colors: {
		primary: {
			50: '#fff6db',
			100: '#ffe4af',
			200: '#fcd280',
			300: '#fac150',
			400: '#f8af21',
			500: '#de9507',
			600: '#ad7401',
			700: '#7d5300',
			800: '#4b3200',
			900: '#1d1000',
		},
		secondary: {
			50: '#ede8ff',
			100: '#c8bef7',
			200: '#a093ec',
			300: '#7668e3',
			400: '#5a3ddb',
			500: '#4b23c1',
			600: '#421c97',
			700: '#35146d',
			800: '#230b44',
			900: '#10031c',
		},
	},
	fonts: {
		heading: 'var(--font-inter)',
		body: 'var(--font-inter)',
	},
})
