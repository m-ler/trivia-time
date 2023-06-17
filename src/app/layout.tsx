import Background from '@/components/theme/Background'
import Providers from '@/config/Providers'
import { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body style={{ minWidth: 320 }}>
				<Providers>
					<Background />
					{children}
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
