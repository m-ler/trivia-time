'use client'

import { UserWithProfile } from '@/types'
import { Box, Container, Table, TableContainer, Tbody } from '@chakra-ui/react'
import { Fragment } from 'react'
import UserRow from './UserRow'

type Props = {
	data: UserWithProfile[]
}

const Leaderboard = ({ data }: Props) => {
	return (
		<Box px={4}>
			<Container maxW="6xl" p={0} my={8}>
				<TableContainer bgColor="white" rounded="3xl" p={4}>
					<Table variant="simple">
						<Tbody>
							{data.map((user, i) => (
								<Fragment key={i}>
									<UserRow index={i + 1} user={user} />
								</Fragment>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Container>
		</Box>
	)
}

export default Leaderboard
