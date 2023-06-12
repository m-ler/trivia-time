import { AiFillExperiment } from 'react-icons/ai'
import { FaPalette, FaBook } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { HiTv } from 'react-icons/hi2'
import { IconType } from 'react-icons'

export const TRIVIA_OPTIONS = ['a', 'b', 'c', 'd'] as const
export const TRIVIA_TOPICS = ['Art', 'Entertainment', 'Geography', 'History', 'Science'] as const

export const TRIVIA_TOPICS_ICONS: { [key in (typeof TRIVIA_TOPICS)[number]]: IconType } = {
	Art: FaPalette,
	Entertainment: HiTv,
	Geography: MdLocationOn,
	History: FaBook,
	Science: AiFillExperiment,
}

export const SFX_LIST = [
	'correct_answer',
	'roulette_tick',
	'topic_animation',
	'trivia_start',
	'wrong_answer',
	'pop1',
	'click1',
	'timeout'
] as const
