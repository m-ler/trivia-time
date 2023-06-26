import axios from 'axios'
import { useMutation } from 'react-query'

const useUpdateScore = () => {
	const updateScoreMutation = useMutation((positive: boolean) => {
		return axios.put('/api/user/score/increment', {
			positive,
		})
	})

	return {
		updateScore: updateScoreMutation.mutate,
	}
}

export default useUpdateScore
