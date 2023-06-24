import { Link } from '@chakra-ui/react'
import { Link as NextLink } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'

type Props = {
	label: string
	href: string
}

const NavLink = ({ label, href }: Props) => {
	const selected = usePathname().startsWith(href)

	return (
		<Link
			as={NextLink}
			href={href}
			fontSize={14}
			fontWeight="semibold"
			position="relative"
			_after={{
				content: '"••"',
				position: 'absolute',
				display: selected ? 'block' : 'none',
				fontSize: '11px',
				top: '80%',
				color: 'blue.500',
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		>
			{label}
		</Link>
	)
}

export default NavLink
