import { Box, Flex, Text } from '@chakra-ui/react'
import { GiTrophy } from 'react-icons/gi'

const EmptyState = () => {
	return (
		<Flex w="full" p={8}>
			<Flex direction="column" mx="auto" alignItems="center">
				<Box color="gray.400" mb={2}>
					<GiTrophy size={64} />
				</Box>
				<Text fontSize={18} fontWeight="bold" color="blue.500">
					No data found!
				</Text>
				<Text fontSize={14} color="gray.400">
					It seems no one has played yet...
				</Text>
			</Flex>
		</Flex>
	)
}

export default EmptyState
