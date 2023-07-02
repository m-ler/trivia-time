'use client'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Box
				position="fixed"
				top={4}
				left={4}
				maxW="42px"
				_hover={{
					'& img': {
						transitionDuration: '200ms',
						transform: 'scale(1.15)',
					},
				}}
			>
				<Link href="/">
					<Image
						src="/img/trivia_time_icon.svg"
						width="0"
						height="0"
						alt="logo"
						priority
						style={{ width: '100%', height: 'auto', filter: 'drop-shadow(2px 2px 0px rgba(0,20,35,0.5))' }}
					/>
				</Link>
			</Box>
			{children}
		</>
	)
}

export default RootLayout
