import { Avatar, Flex, Button } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'

const UserAvatar = () => {
	const user = useSession().data?.user

	if (!user) return <></>

	return (
		<Flex alignItems="center" gap={4}>
			<Button colorScheme="yellow" variant="ghost" color="yellow.400" onClick={() => signOut()}>
				Sign out
			</Button>
			<Avatar name={user.name || ''} src={user.image || ''} referrerPolicy="no-referrer" />
		</Flex>
	)
}

export default UserAvatar
