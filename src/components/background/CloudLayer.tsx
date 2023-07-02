import { useEffect, useMemo, useRef } from 'react'
import Cloud from './Cloud'
import { Box } from '@chakra-ui/react'
import { randomNumber } from '@/utils/math'
import './cloud-animation.css'

const CLOUD_NUMBER = 20

const CloudLayer = () => {
	const ref = useRef<HTMLDivElement | null>(null)

	const updateStyle = () => {
		if (!ref.current) return
		ref.current.style.animation = `cloud-layer ${randomNumber(120, 150)}s infinite -${randomNumber(600, 60)}s linear `
	}

	useEffect(() => {
		updateStyle()
	}, [])

	const clouds = useMemo(
		() =>
			Array(CLOUD_NUMBER)
				.fill(null)
				.map((x, i) => <Cloud key={i} />),
		[]
	)

	return (
		<Box position="absolute" inset={0} ref={ref} zIndex={-2}>
			{clouds}
		</Box>
	)
}

export default CloudLayer
