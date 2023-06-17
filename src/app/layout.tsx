import Providers from '@/config/Providers'
import { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body style={{ minWidth: 320 }}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

export default RootLayout
