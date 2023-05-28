import { PropsWithChildren } from 'react'

export const metadata = {
	title: 'Trivia Time!',
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
