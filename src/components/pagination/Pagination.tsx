import { Flex } from '@chakra-ui/react'
import PageButton from './PageButton'
import { useEffect, useState } from 'react'
import ArrowButton from './ArrowButton'

type Props = {
	length: number
	onChange: (page: number) => void
}

const Pagination = ({ length, onChange }: Props) => {
	const [selectedPage, setSelectedPage] = useState(1)

	useEffect(() => {
		onChange(selectedPage)
	}, [selectedPage])

	return (
		<Flex direction="row" gap={2} alignItems="center">
			<ArrowButton direction="left" selectedPage={selectedPage} length={length} setPage={setSelectedPage} />
			<Flex
				direction="row"
				alignItems="center"
				gap={1}
				overflow="auto"
				sx={{
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					'&-ms-overflow-style': {
						display: 'none',
					},
					scrollbarWidth: 'none',
				}}
			>
				{Array(length)
					.fill(null)
					.map((x, i) => (
						<PageButton key={i} page={i + 1} onClick={() => setSelectedPage(i + 1)} selected={selectedPage === i + 1} />
					))}
			</Flex>

			<ArrowButton direction="right" selectedPage={selectedPage} length={length} setPage={setSelectedPage} />
		</Flex>
	)
}

export default Pagination
