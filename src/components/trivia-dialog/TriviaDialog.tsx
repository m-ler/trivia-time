'use client'

import { Modal, ModalBody, ModalContent, ModalOverlay, Spinner, Stack, Text } from '@chakra-ui/react'
import TopicAnimation from './TopicAnimation'
import { useEffect, useRef, useState } from 'react'
import Trivia from './Trivia'
import { triviaDialogState } from '@/store/trivia-dialog'
import APIError from './APIError'
import useTriviaRequest from '@/hooks/useTriviaRequest'

const TriviaDialog = () => {
	const triviaDialog = triviaDialogState((state) => state)
	const [showIntroAnimation, setShowIntroAnimation] = useState(false)
	const introAnimationEnded = useRef(false)
	const { triviaQuery, apiError, trivia } = useTriviaRequest()

	useEffect(() => {
		setShowIntroAnimation(triviaDialog.open)
		introAnimationEnded.current = false
	}, [triviaDialog.open])

	const onIntroAnimationEnd = () => {
		setShowIntroAnimation(false)
		introAnimationEnded.current = true
	}

	console.log(introAnimationEnded.current)

	const isError = Boolean(triviaQuery.error || apiError)

	return (
		<Modal
			isOpen={Boolean(triviaDialog.open)}
			onClose={() => triviaDialog.setOpen(false)}
			closeOnEsc={false}
			closeOnOverlayClick={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					{showIntroAnimation || !introAnimationEnded.current ? (
						<TopicAnimation onAnimationComplete={onIntroAnimationEnd} />
					) : (
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
