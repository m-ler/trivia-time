import { PropsWithChildren } from 'react'
import Header from '@/components/Header'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default RootLayout
