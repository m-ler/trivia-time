import { PropsWithChildren } from 'react'
import Header from '@/components/header'
import ProfileDrawer from '@/components/profile-drawer'
import SettingsDialog from '@/components/SettingsDialog'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<ProfileDrawer />
			<SettingsDialog />
			{children}
		</>
	)
}

export default RootLayout
