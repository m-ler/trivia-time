import { Link } from '@chakra-ui/next-js'
import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { MdPlayCircle, MdMenu, MdLeaderboard } from 'react-icons/md'

const HamburgerMenu = () => {
	const { data: session } = useSession()
	return (
		<Menu placement="bottom" offset={[0, 20]}>
			<MenuButton
				as={IconButton}
				icon={<MdMenu size={20} />}
				display={{ base: 'inline-flex', md: 'none' }}
			></MenuButton>
			<MenuList>
				<MenuItem as={Link} href="/play" icon={<MdPlayCircle size={20} />}>
					Play
				</MenuItem>
				<MenuItem as={Link} href="/leaderboard" icon={<MdLeaderboard size={20} />}>
					Leaderboard
				</MenuItem>
				{!session && (
					<>
						<MenuDivider />
						<MenuItem as={Link} href="/signup">
							Sign up
						</MenuItem>
						<MenuItem as={Link} href="/signin">
							Log in
						</MenuItem>
					</>
				)}
			</MenuList>
		</Menu>
	)
}

export default HamburgerMenu
