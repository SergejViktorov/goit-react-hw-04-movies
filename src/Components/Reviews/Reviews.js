import { functionMovieReviews } from '../../services/ThemovieApi'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Reviews() {
	const [reviews, setReviews] = useState([])
	const { movieId } = useParams()
	const error = 'We dont hawe any reviews for this movie.'

	useEffect(() => {
		async function fetch() {
			const reviewsFilm = await functionMovieReviews(movieId)
			setReviews(reviewsFilm.data.results)
		}
		fetch()
	}, [movieId])

	return reviews.length === 0 ? (
		<p>{error}</p>
	) : (
		<ul>
			{reviews.map((review) => {
				return (
					<li>
						<p>{review.author}</p>
						<p>{review.content}</p>
					</li>
				)
			})}
		</ul>
	)
}
