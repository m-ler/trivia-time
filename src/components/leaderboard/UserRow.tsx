import { UserWithProfile } from '@/types'
import { Flex, Text, Td, Tr, Avatar, Box, Tooltip } from '@chakra-ui/react'
import { FaCrown } from 'react-icons/fa'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'

type Props = {
	index: number
	user: UserWithProfile
}

const numberFormatter = Intl.NumberFormat('en', {
	notation: 'compact',
	compactDisplay: 'short',
	maximumSignificantDigits: 3,
})

const UserRow = ({ user, index }: Props) => {
	const score = user.profile?.score || 0
	const negativeScore = user.profile?.negativeScore || 0
	const averageScore = user.profile?.averageScore || 0

	return (
		<Tr>
			<Td p={2} width="full">
				<Flex alignItems="center" gap={4}>
					<Text fontSize={12} fontWeight="bold" width="15px">
						{index}
					</Text>
					<Avatar size="sm" name={user?.name || ''} src={user?.profile?.customImage || user?.image || ''}></Avatar>
					<Text>{user?.name}</Text>
					{index === 1 && (
						<Box color="yellow.400">
							<FaCrown />
						</Box>
					)}
				</Flex>
			</Td>
			<Td p={2}>
				<Tooltip label={score}>
					<Flex maxW="80px" bg="green.100" px={2} py={0.25} rounded="sm" alignItems="center" gap={1} color="green.600">
						<MdArrowUpward size="12px" />
						<Text fontSize={11} textAlign="right" color="green.600">
							{numberFormatter.format(score)}
						</Text>
					</Flex>
				</Tooltip>
			</Td>
			<Td p={2}>
				<Tooltip label={negativeScore}>
					<Flex bg="red.100" px={2} py={0.25} rounded="sm" alignItems="center" gap={1} color="red.600">
						<MdArrowDownward size="12px" />
						<Text fontSize={11} textAlign="right" color="red.600">
							{numberFormatter.format(negativeScore)}
						</Text>
					</Flex>
				</Tooltip>
			</Td>
			<Td p={2}>
				<Tooltip label={averageScore}>
					<Text w="50px" textAlign="right" fontSize={14} fontWeight="bold" color="blue.800">
						{numberFormatter.format(averageScore)}
					</Text>
				</Tooltip>
			</Td>
		</Tr>
	)
}

export default UserRow
