'use client'
import { profileDrawerState } from '@/store/profile-drawer'
import {
	Button,
	Divider,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	Link,
	Stack,
	Text,
	Tooltip,
} from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { MdExitToApp } from 'react-icons/md'
import ScoreCard from './ScoreCard'
import AvatarButton from './AvatarButton'
import { BsPersonDash } from 'react-icons/bs'
import { Link as NextLink } from '@chakra-ui/next-js'

const ProfileDrawer = () => {
	const user = useSession().data?.user
	const { open, setOpen } = profileDrawerState((state) => state)
	const score = user?.profile?.score || 0
	const negativeScore = user?.profile?.negativeScore || 0
	const positivePercentage = (score * 100) / (score + negativeScore) || 0
	const negativePercentage = (negativeScore * 100) / (score + negativeScore) || 0

	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={open} autoFocus={false}>
			<DrawerOverlay />
			<DrawerContent position="relative" margin="auto" w="480px" maxW="480px" borderTopRadius="3xl" p={4}>
				<Flex direction="column" pt={8} pb={4} position="relative" gap={2}>
					<AvatarButton />
					<Text fontWeight="bold" fontSize={24} textAlign="center">
						{user?.name}
					</Text>

					<ScoreCard type="positive" score={score} percentage={positivePercentage} />
					<ScoreCard type="negative" score={negativeScore} percentage={negativePercentage} />
					<Divider my={2} />
					<Stack direction="row" mx="auto">
						<Tooltip hasArrow label="Delete account" openDelay={500}>
							<Link as={NextLink} href="/delete-account">
								<IconButton aria-label="Delete account" variant="outline" size="sm" icon={<BsPersonDash size={18} />} />
							</Link>
						</Tooltip>
						<Button size="sm" rightIcon={<MdExitToApp />} variant="outline" onClick={() => signOut()}>
							Sign out
						</Button>
					</Stack>
				</Flex>
			</DrawerContent>
		</Drawer>
	)
}

export default ProfileDrawer
