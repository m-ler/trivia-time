import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mler.developer@gmail.com',
		pass: process.env.GMAIL_APP_PASSWORD,
	},
})

export default transporter
