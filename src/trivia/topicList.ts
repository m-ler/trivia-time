import { TriviaTopics } from '@/types'

type SubTopic = {
	name: string
	epochRange?: [number, number]
	epochSize?: number
}
type TopicList = { [key in TriviaTopics]: SubTopic[] }

export const topicList: TopicList = {
	Art: [
		{
			name: 'Music',
			epochRange: [1600, 2022],
			epochSize: 5,
		},
		{
			name: 'Painting',
			epochRange: [1400, 2022],
			epochSize: 50,
		},
		{
			name: 'Movies',
			epochRange: [1890, 2022],
			epochSize: 10,
		},
		{
			name: 'Video Games',
			epochRange: [1960, 2022],
			epochSize: 2,
		},
		{
			name: 'Literature',
			epochRange: [-2000, 2020],
			epochSize: 200,
		},
	],
	Entertainment: [
		{
			name: 'Memes ',
			epochRange: [1996, 2022],
			epochSize: 1,
		},
		{
			name: 'Sports',
			epochRange: [1990, 2022],
			epochSize: 10,
		},
		{
			name: 'Social Media',
			epochRange: [1996, 2022],
			epochSize: 2,
		},
		{
			name: 'Celebrities',
			epochRange: [1990, 2022],
			epochSize: 5,
		},
		{
			name: 'TV Shows',
			epochRange: [1930, 2022],
			epochSize: 3,
		},
		{
			name: 'Cartoons and Anime',
			epochRange: [1910, 2022],
			epochSize: 4,
		},
	],
	Geography: [
		{
			name: 'Countries',
			epochRange: [-3200, 2022],
			epochSize: 400,
		},
		{
			name: 'Continents',
		},
		{
			name: 'Cities',
			epochRange: [-2000, 2022],
			epochSize: 350,
		},
	],
	History: [
		{
			name: 'Politics',
		},
		{
			name: 'Ancient Civilizations',
			epochRange: [-3000, 0],
			epochSize: 300,
		},
		{
			name: 'War',
		},
		{
			name: 'Religions',
		},
	],
	Science: [
		{
			name: 'Space',
		},
		{
			name: 'Math',
		},
		{
			name: 'Animals',
		},
		{
			name: 'Plants',
		},
		{
			name: 'Humans',
		},
		{
			name: 'Medicine',
			epochRange: [1800, 2022],
			epochSize: 20,
		},
		{
			name: 'Technology',
		},
	],
}
