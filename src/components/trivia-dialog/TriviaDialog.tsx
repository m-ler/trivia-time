'use client'

import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import TopicAnimation from './TopicAnimation'
import { useEffect, useState } from 'react'
import Trivia from './Trivia'
import { triviaDialogState } from '@/store/trivia-dialog'

const TriviaDialog = () => {
	const triviaDialog = triviaDialogState((state) => state)
	const [showTopicAnimation, setShowTopicAnimation] = useState(false)

	useEffect(() => {
		setShowTopicAnimation(Boolean(triviaDialog.setTopic))
	}, [triviaDialog.setTopic])

	const onClose = () => {
		triviaDialog.setOpen(false)
	}

	return (
		<Modal isOpen={Boolean(triviaDialog.open)} onClose={onClose} closeOnOverlayClick={false}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					{showTopicAnimation ? (
						<TopicAnimation onAnimationComplete={() => setShowTopicAnimation(false)} />
					) : (
						<Trivia />
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default TriviaDialog
