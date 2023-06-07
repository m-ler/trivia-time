'use client'

import { TriviaTopic } from '@/types'
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

type Props = {
	triviaTopic: TriviaTopic | null
	onClose: () => void
}

const TriviaDialog = ({ triviaTopic, onClose }: Props) => {
	return (
		<Modal isOpen={Boolean(triviaTopic)} onClose={onClose} closeOnOverlayClick={false} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>{triviaTopic}</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default TriviaDialog
