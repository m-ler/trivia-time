'use client'

import { Button, Container, Stack, Flex, Text, Link } from '@chakra-ui/react'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { Link as NextLink } from '@chakra-ui/next-js'
import useDeleteAccount from '@/hooks/account/useDeleteAccount'

const DeletteAccount = () => {
	const { deleteAccount, isLoading: deletingAccount } = useDeleteAccount()

	return (
		<Container maxW="xl" sx={{ pt: 20 }}>
			<Flex direction="column" bgColor="white" rounded="3xl" px={4} py={6} alignItems="center">
				<MdOutlineDeleteForever size={64} />
				<Text as="h1" fontSize={24} fontWeight="bold" mb={2}>
					Delete account
				</Text>

				<Text textAlign="center" mb={6} fontSize={14}>
					Deleting your account is an irreversible action, and it will result in the permanent removal of all your data,
					including your profile information and leaderboard score.
				</Text>
				<Stack direction="row">
					<Link as={NextLink} href="/">
						<Button colorScheme="yellow">Go back</Button>
					</Link>
					<Button variant="outline" colorScheme="red" onClick={() => deleteAccount()} isLoading={deletingAccount}>
						Confirm
					</Button>
				</Stack>
			</Flex>
		</Container>
	)
}

export default DeletteAccount
