export const randomNumber = (min: number, max: number) =>
	Math.floor(Math.random() * max) + min

export const clampNumber = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)
