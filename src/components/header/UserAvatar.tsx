import { Avatar, Flex, Button, Box } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'

const UserAvatar = () => {
	const user = useSession().data?.user

	if (!user) return <></>

	return (
		<Flex alignItems="center" gap={4}>
			<Button colorScheme="yellow" variant="ghost" color="yellow.400" onClick={() => signOut()}>
				Sign out
			</Button>
			<Box rounded="full" p={1} bg="white">
				<Avatar name={user.name || ''} src={user.image || ''} size="sm" referrerPolicy="no-referrer" />
			</Box>
		</Flex>
	)
}

export default UserAvatar
