import Home from './Home'

export const metadata = {
	title: 'Trivia Time! | Play AI-generated trivias',
	description:
		'Play AI-generated trivias and explore the fascinating worlds of art, entertainment, geography, history, and science. Immerse yourself in captivating quizzes that will test your knowledge across a wide range of subjects. Compete with people around the world, climb the leaderboard, and become a true trivia master.',
	openGraph: {
		title: 'Trivia Time!',
		type: 'website',
		siteName: 'Trivia Time!',
		description: 'Play AI-generated trivias.',
		images: [
			{
				url: '/img/trivia_time_logo_512.png',
				width: 512,
				height: 512,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Trivia Time!',
		description: 'Play AI-generated trivias.',
		images: ['/img/trivia_time_logo_512.png'],
	},
}

const Page = () => {
	return <Home />
}

export default Page
