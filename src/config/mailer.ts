import nodemailer from 'nodemailer'
import { GMAIL_APP_PASSWORD } from '.'

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mler.developer@gmail.com',
		pass: GMAIL_APP_PASSWORD,
	},
})

export default transporter
