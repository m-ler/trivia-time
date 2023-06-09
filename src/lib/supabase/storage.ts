import { supabase } from './client'

export const deleteDirectory = async (bucketName: string, dirPath: string) => {
	const { data: files, error } = await supabase.storage.from(bucketName).list(dirPath)
	if (error || !files.length) return

	const { error: filesError } = await supabase.storage.from('media').remove(files.map((x) => `${dirPath}/${x.name}`))
	if (filesError) throw new Error("Couldn't remove the media. Please try again.")

	const { error: pathError } = await supabase.storage.from(bucketName).remove([dirPath])
	if (pathError) throw new Error("Couldn't remove the media. Please try again.")
}

export const checkFileExists = async (bucketName: string, filePath: string, fileName: string) => {
	const { data: files } = await supabase.storage.from(bucketName).list(filePath)
	return (files || []).some((x) => x.name === fileName)
}

export const uploadAvatar = async (file: File, userEmail: string) => {
	const fileExtension = file.type.split('/')[1]
	const fileName = `avatar.${fileExtension}`
	const filePath = `${userEmail}/${fileName}`
	const fileExists = await checkFileExists('media', userEmail, fileName)

	const { data, error } = fileExists
		? await supabase.storage.from('media').update(filePath, file)
		: await supabase.storage.from('media').upload(filePath, file)

	if (error) throw new Error("Couldn't upload file. Please try again.")

	const avatarURL = `${supabase.storage.from('media').getPublicUrl(data.path).data.publicUrl}?updated=${Date.now()}`
	return avatarURL
}
