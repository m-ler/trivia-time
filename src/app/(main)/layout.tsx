import { PropsWithChildren } from 'react'
import Header from '@/components/header'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default RootLayout
