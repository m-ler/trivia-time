'use client'

import { UserWithProfile } from '@/types'
import { Box, Container, Flex, Table, TableContainer, Tbody } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import UserRow from './UserRow'
import Pagination from '../pagination'
import EmptyState from './EmptyState'

type Props = {
	data: UserWithProfile[]
}

const PAGE_SIZE = 10

const Leaderboard = ({ data }: Props) => {
	const [page, setPage] = useState(1)
	const [paginatedData, setPaginatedData] = useState(data.slice(0, PAGE_SIZE))

	useEffect(() => {
		setPaginatedData(data.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * (page - 1) + PAGE_SIZE))
	}, [page])

	const onPageChange = (page: number) => {
		setPage(page)
	}

	return (
		<Box px={4}>
			<Container maxW="6xl" p={0} my={8}>
				<TableContainer bgColor="white" rounded="3xl" p={4}>
					{data.length === 0 && <EmptyState />}
					<Table variant="simple">
						<Tbody>
							{paginatedData.map((user, i) => (
								<Fragment key={i}>
									<UserRow index={i + 1 + PAGE_SIZE * (page - 1)} user={user} />
								</Fragment>
							))}
						</Tbody>
					</Table>
					{data.length > 0 && (
						<Flex w="full" maxW="full">
							<Box mx="auto" pt={4} overflow="hidden">
								<Pagination length={Math.ceil(data.length / PAGE_SIZE)} onChange={onPageChange} />
							</Box>
						</Flex>
					)}
				</TableContainer>
			</Container>
		</Box>
	)
}

export default Leaderboard
