'use client'
import { settingsDialogState } from '@/store/settings-dialog'
import { userKeyState } from '@/store/user-key'
import {
	Divider,
	Flex,
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
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Stack,
	Tooltip,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MdKey, MdVolumeUp } from 'react-icons/md'

const SettingsDialog = () => {
	const { open, setOpen } = settingsDialogState((state) => state)
	const [showVolumeTooltip, setShowVolumeTooltip] = useState(false)
	const [volume, setVolume] = useState(parseInt(localStorage.getItem('volume') || '100'))
	const { key, setKey } = userKeyState((state) => state)

	useEffect(() => {
		localStorage.setItem('volume', volume.toString())
	}, [volume])

	return (
		<Modal isOpen={open} onClose={() => setOpen(false)} autoFocus={false}>
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
								<Input type="text" defaultValue={key} onBlur={(e) => setKey(e.target.value)} />
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

						<Divider />

						<FormControl>
							<FormLabel>Volume</FormLabel>
							<Flex gap={4}>
								<MdVolumeUp size={24} />
								<Slider
									id="slider"
									defaultValue={volume}
									min={0}
									max={100}
									colorScheme="blue"
									onChange={(value) => setVolume(value)}
									onMouseEnter={() => setShowVolumeTooltip(true)}
									onMouseLeave={() => setShowVolumeTooltip(false)}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<Tooltip
										hasArrow
										bg="blue.500"
										color="white"
										placement="bottom"
										isOpen={showVolumeTooltip}
										label={volume}
									>
										<SliderThumb />
									</Tooltip>
								</Slider>
							</Flex>
						</FormControl>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default SettingsDialog
