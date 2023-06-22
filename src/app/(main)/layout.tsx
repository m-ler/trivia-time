import { PropsWithChildren } from 'react'
import Header from '@/components/header'
import ProfileDrawer from '@/components/profile-drawer'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<ProfileDrawer />
			{children}
		</>
	)
}

export default RootLayout
