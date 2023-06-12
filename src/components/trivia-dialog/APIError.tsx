import { getErrorMessages } from '@/lib/openai/errors'
import { triviaDialogState } from '@/store/trivia-dialog'
import { Button, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import { MdCancel } from 'react-icons/md'

type Props = {
	errorCode: string
}

const defaultMessage = 'There seems to be an issue with the API at this time. Please try again later.'

const APIError = ({ errorCode }: Props) => {
	const { setOpen } = triviaDialogState((state) => state)
	const errorMessages = getErrorMessages(errorCode) || []

	const onClose = () => {
		setOpen(false)
	}

	return (
		<Stack bg="red.500" rounded="3xl" p={6} spacing={1} w="full" alignItems="start">
			<Text color="white" fontWeight="bold" fontSize={22}>
				Ooops!{' '}
			</Text>
			{errorMessages.length === 0 ? (
				<Text color="whiteAlpha.600" fontWeight="medium" fontSize={20} lineHeight="6">
					{defaultMessage}
				</Text>
			) : (
				<>
					<Text color="whiteAlpha.600" fontWeight="medium" fontSize={20} lineHeight="6">
						An error occurred due to one of the following reasons:
					</Text>

					<List spacing={3} mt="1rem !important">
						{errorMessages.map((error) => (
							<ListItem key={error} mt="0.5rem !important" display="flex" flexDirection="row">
								<ListIcon as={MdCancel} color="whiteAlpha.600" boxSize="20px" />
								<Text color="whiteAlpha.600" fontWeight="medium" fontSize={18} lineHeight="5">
									{error}
								</Text>
							</ListItem>
						))}
					</List>
				</>
			)}
			<Button mt="1.5rem !important" rounded="full" onClick={onClose}>
				Close
			</Button>
		</Stack>
	)
}

export default APIError
