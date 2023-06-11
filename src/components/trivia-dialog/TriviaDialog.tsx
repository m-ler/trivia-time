'use client'

import { TriviaTopic } from '@/types'
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import TopicAnimation from './TopicAnimation'
import { useEffect, useState } from 'react'
import Trivia from './Trivia'

type Props = {
	triviaTopic: TriviaTopic | null
	onClose: () => void
}

const TriviaDialog = ({ triviaTopic, onClose }: Props) => {
	const [showTopicAnimation, setShowTopicAnimation] = useState(false)

	useEffect(() => {
		setShowTopicAnimation(Boolean(triviaTopic))
	}, [triviaTopic])

	return (
		<Modal isOpen={Boolean(triviaTopic)} onClose={onClose} closeOnOverlayClick={false}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					{showTopicAnimation ? (
						<TopicAnimation topic={triviaTopic} onAnimationComplete={() => setShowTopicAnimation(false)} />
					) : (
						<Trivia topic={triviaTopic} onClose={onClose} />
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default TriviaDialog
