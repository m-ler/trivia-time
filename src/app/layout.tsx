import Background from '@/components/background/Background'
import Providers from '@/config/Providers'
import { PropsWithChildren } from 'react'

export const metadata = {
	referrer: 'no-referrer',
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body style={{ minWidth: 320, height: '100vh' }}>
				<Providers>
					<Background />
					{children}
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
