import { IconButton } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

type Props = {
	length: number
	direction: 'left' | 'right'
	selectedPage: number
	setPage: Dispatch<SetStateAction<number>>
}

const ArrowButton = ({ direction, selectedPage, length, setPage }: Props) => {
	const handleClick = () => {
		const nextPage = selectedPage + (direction === 'left' ? -1 : 1)
		setPage(nextPage)
	}

	return (
		<IconButton
			onClick={handleClick}
			isDisabled={direction === 'left' ? selectedPage === 1 : selectedPage === length}
			aria-label="Pagination left"
			icon={direction === 'left' ? <MdKeyboardArrowLeft size={16} /> : <MdKeyboardArrowRight size={16} />}
			sx={{
				p: 1,
				flexShrink: '0',
				minW: 35,
				minH: 35,
				w: 35,
				h: 35,
				borderRadius: '50%',
				bg: 'transparent',
			}}
		/>
	)
}

export default ArrowButton
