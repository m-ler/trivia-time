import Providers from '@/config/Providers'
import { PropsWithChildren } from 'react'
import Header from '@/components/Header'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body style={{ minWidth: 320 }}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
