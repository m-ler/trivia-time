import { Button } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

type Props = {
	page: number
	onClick: () => void
	selected: boolean
}

const PageButton = ({ page, onClick, selected }: Props) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		if (buttonRef.current) buttonRef.current.scrollIntoView({ block: 'center' })
	}, [selected])

	return (
		<Button
			ref={buttonRef}
			onClick={onClick}
			sx={{
				p: 1,
				fontSize: 13,
				flexShrink: '0',
				minW: 35,
				minH: 35,
				w: 35,
				h: 35,
				borderRadius: '50%',
				bg: selected ? 'yellow.300' : 'transparent',
				color: selected ? 'gray.800' : 'gray.600',
				fontWeight: selected ? '700' : '500',
			}}
		>
			{page}
		</Button>
	)
}

export default PageButton
