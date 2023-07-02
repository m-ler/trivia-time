import { Skeleton, Flex } from '@chakra-ui/react'

const TriviaLoadingState = () => {
	return (
		<Flex direction="column" alignItems="center" p={4} width={500} gap={2}>
			<Skeleton width="full" height="120px" rounded="md" mb={4}/>
			<Skeleton width="full" height="52px" rounded="md" />
			<Skeleton width="full" height="52px" rounded="md" />
			<Skeleton width="full" height="52px" rounded="md" />
			<Skeleton width="full" height="52px" rounded="md" />
		</Flex>
	)
}

export default TriviaLoadingState
