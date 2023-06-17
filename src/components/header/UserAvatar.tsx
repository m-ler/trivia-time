import { Avatar, Flex, Button } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'

const UserAvatar = () => {
	const user = useSession().data?.user

	if (!user) return <></>

	return (
		<Flex alignItems="center" gap={4}>
			<Button colorScheme="primary" variant="ghost" onClick={() => signOut()}>
				Sign out
			</Button>
			<Avatar name={user.name || ''} src={user.image || ''} />
		</Flex>
	)
}

export default UserAvatar
