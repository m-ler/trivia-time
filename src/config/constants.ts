import { AiFillExperiment } from 'react-icons/ai'
import { FaPalette, FaBook } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { HiTv } from 'react-icons/hi2'

export const TRIVIA_TOPICS = [
	'Art',
	'Entertainment',
	'Geography',
	'History',
	'Science',
] as const

export const TRIVIA_TOPICS_ICONS = [
	FaPalette,
	HiTv,
	MdLocationOn,
	FaBook,
	AiFillExperiment,
]
