'use client'

import { Modal, ModalBody, ModalContent, ModalOverlay, Spinner, Stack, Text } from '@chakra-ui/react'
import TopicAnimation from './TopicAnimation'
import { useEffect, useState } from 'react'
import Trivia from './Trivia'
import { triviaDialogState } from '@/store/trivia-dialog'
import APIError from './APIError'
import useTriviaRequest from '@/hooks/useTriviaRequest'

const TriviaDialog = () => {
	const triviaDialog = triviaDialogState((state) => state)
	const [showTopicAnimation, setShowTopicAnimation] = useState(false)
	const { triviaQuery, apiError, trivia } = useTriviaRequest()

	useEffect(() => {
		setShowTopicAnimation(Boolean(triviaDialog.topic))
	}, [triviaDialog.topic])

	const onClose = () => {
		triviaDialog.setOpen(false)
	}

	const isError = Boolean(triviaQuery.error || apiError)

	return (
		<Modal isOpen={Boolean(triviaDialog.open)} onClose={onClose} closeOnEsc={false} closeOnOverlayClick={false}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<TopicAnimation show={showTopicAnimation} onAnimationComplete={() => setShowTopicAnimation(false)} />
					{!showTopicAnimation && (
						<Stack w="full" alignItems="center" py={4}>
							{triviaQuery.isFetching ? (
								<Stack alignItems="center" p={4}>
									<Text>🤖 Thinking...</Text>
									<Spinner />
								</Stack>
							) : isError ? (
								<APIError errorCode={triviaQuery.data?.data.errorCode || ''} />
							) : trivia ? (
								<Trivia />
							) : (
								<></>
							)}
						</Stack>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default TriviaDialog
