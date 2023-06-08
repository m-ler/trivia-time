import { AiFillExperiment } from 'react-icons/ai'
import { FaPalette, FaBook } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { HiTv } from 'react-icons/hi2'
import { IconType } from 'react-icons'

export const TRIVIA_TOPICS = ['Art', 'Entertainment', 'Geography', 'History', 'Science'] as const

export const TRIVIA_TOPICS_ICONS: { [key in (typeof TRIVIA_TOPICS)[number]]: IconType } = {
	Art: FaPalette,
	Entertainment: HiTv,
	Geography: MdLocationOn,
	History: FaBook,
	Science: AiFillExperiment,
}
