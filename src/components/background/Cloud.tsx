'use client'

import { randomNumber } from '@/utils/math'
import { Image } from '@chakra-ui/next-js'
import { useEffect, useRef } from 'react'

const Cloud = () => {
	const ref = useRef<HTMLImageElement | null>(null)

	const updateStyle = () => {
		if (!ref.current) return

		ref.current.style.opacity = `${randomNumber(10, 90) / 100}`
		ref.current.style.position = 'absolute'
		ref.current.style.left = `${randomNumber(-10, 110)}%`
		ref.current.style.top = `${randomNumber(-10, 110)}%`
		ref.current.style.width = `${randomNumber(8, 20)}vw`
		ref.current.style.height = 'auto'
		ref.current.style.animation = 'cloud 200ms linear'
	}

	useEffect(() => {
		updateStyle()
	}, [])

	return (
		<Image
			ref={ref}
			width="0"
			height="0"
			alt="cloud"
			src="/img/cloud.svg"
			position="absolute"
			zIndex={-2}
			transitionDuration="1s"
			priority
		/>
	)
}

export default Cloud
