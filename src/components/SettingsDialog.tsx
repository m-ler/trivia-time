'use client'
import { settingsDialogState } from '@/store/settings-dialog'
import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react'
import { MdKey } from 'react-icons/md'

const SettingsDialog = () => {
	const { open, setOpen } = settingsDialogState((state) => state)

	return (
		<Modal isOpen={open} onClose={() => setOpen(false)}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<Stack py={4}>
						<FormControl>
							<FormLabel>OpenAI API key</FormLabel>
							<InputGroup>
								<InputLeftAddon>
									<MdKey />
								</InputLeftAddon>
								<Input type="text" />
							</InputGroup>

							<FormHelperText>
								{'Get your personal API key '}
								<Link
									textDecoration="underline"
									color="blue.500"
									target="_blank"
									href="https://platform.openai.com/account/api-keys"
								>
									here.
								</Link>
							</FormHelperText>
						</FormControl>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default SettingsDialog
