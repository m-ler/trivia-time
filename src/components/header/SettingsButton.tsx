import { settingsDialogState } from '@/store/settings-dialog'
import { userKeyState } from '@/store/user-key'
import {
	Button,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverTrigger,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdSettings } from 'react-icons/md'

const SettingsButton = () => {
	const { setOpen: setSettingsDialogOpen } = settingsDialogState((state) => state)
	const { key } = userKeyState((state) => state)
	const [showPopover, setShowPopover] = useState(false)
	const pathname = usePathname()

	const onPopoverClose = () => {
		setShowPopover(false)
		sessionStorage.setItem('apiPopoverClosed', 'true')
	}

	useEffect(() => {
		if (pathname.startsWith('/play')) {
			const alreadyClose = window.sessionStorage ? sessionStorage.getItem('apiPopoverClosed') : false
			setShowPopover(!alreadyClose && !key)
			return
		}
		setShowPopover(false)
	}, [pathname])

	return (
		<Popover isOpen={showPopover}>
			<PopoverTrigger>
				<IconButton aria-label="Settings" color="blue.400" onClick={() => setSettingsDialogOpen(true)}>
					<MdSettings size={20} />
				</IconButton>
			</PopoverTrigger>
			<PopoverContent maxWidth="200px" boxShadow="0px 2px 4px rgba(0,0,0,0.25)">
				<PopoverArrow />
				<PopoverBody fontSize={14}>You can use your own API key 🗝️</PopoverBody>
				<PopoverFooter display="flex" justifyContent="flex-end">
					<Button variant="outline" size="sm" px={2} py={0} fontSize={12} onClick={onPopoverClose}>
						Got it
					</Button>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	)
}

export default SettingsButton
