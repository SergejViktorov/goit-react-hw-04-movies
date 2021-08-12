import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

axios.defaults.params = {
	api_key: '270c9460467cb692b40e4f1315fe5299',
}
const API_KEY = '270c9460467cb692b40e4f1315fe5299'

export const fetchTrending = () => {
	return axios.get('trending/movie/day').catch((error) => console.log(error))
}

export const functionMovieDetails = (movie_id) => {
	return axios.get(`movie/${movie_id}`, {
		params: { language: 'en-US' },
	})
}

export const functionMovieCredits = (movie_id) => {
	return axios.get(`movie/${movie_id}/credits`, {
		params: { language: 'en-US' },
	})
}
export const functionMovieReviews = (movie_id) => {
	return axios.get(`movie/${movie_id}/reviews`, {
		params: { language: 'en-US', page: 1 },
	})
}

export const functionSearchMovies = (search, page = 1) => {
	return axios.get('search/movie', {
		params: {
			query: `${search}`,
			language: 'en-US',
			page: 1,
			include_adult: false,
		},
	})
}

export default fetchTrending
