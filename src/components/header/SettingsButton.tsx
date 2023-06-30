import { settingsDialogState } from '@/store/settings-dialog'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

const SettingsButton = () => {
	const { setOpen: setSettingsDialogOpen } = settingsDialogState((state) => state)

	return (
		<Tooltip label="Settings" hasArrow>
			<IconButton aria-label="Settings" color="blue.400" onClick={() => setSettingsDialogOpen(true)}>
				<MdSettings size={20} />
			</IconButton>
		</Tooltip>
	)
}

export default SettingsButton
