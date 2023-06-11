import { TriviaTopic } from '@/types'

type TopicList = { [key in TriviaTopic]: string[] }

export const topicList: TopicList = {
	Art: ['Music', 'Painting', 'Movies', 'Video Games', 'Literature'],
	Entertainment: ['Memes ', 'Sports', 'Social Media', 'Celebrities', 'TV Shows', 'Cartoons and Anime'],
	Geography: ['Countries', 'Continents', 'Cities'],
	History: ['Politics', 'Ancient Civilizations', 'War', 'Religions'],
	Science: ['Space', 'Math', 'Animals', 'Plants', 'Humans', 'Medicine', 'Technology'],
}
