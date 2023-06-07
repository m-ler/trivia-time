import { Box } from '@chakra-ui/react'

type Props = {
	onClick: () => void
}

const SpinButton = ({ onClick }: Props) => {
	return (
		<Box
			as="button"
			position="absolute"
			inset="50%"
			borderRadius="50%"
			transform="translate(-50%, -50%)"
			aria-label="Spin"
			bgColor="gray.700"
			minWidth="25%"
			minHeight="25%"
			boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
			aspectRatio="1/1"
			border="5px solid"
			borderColor="white"
			onClick={onClick}
			color="gray.200"
			outline="none"
			transitionDuration="200ms"
			sx={{
				'&:hover': {
					bgColor: 'primary.500',
					color: 'gray.900',
					transform: 'translate(-50%, -50%) scale(1.1)',
				},
			}}
		>
			<>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMinYMid meet"
				>
					<text
						x="16"
						y="62"
						fontSize="28"
						fontWeight={700}
						fill="currentColor"
					>
						SPIN
					</text>
				</svg>
				<Box
					position="absolute"
					bgColor="white"
					bottom="100%"
					width="50%"
					height="50%"
					clipPath="polygon(50% 0, 100% 50%, 50% 50%, 0 50%)"
					transform="translate(50%, 50%)"
				></Box>
			</>
		</Box>
	)
}

export default SpinButton
