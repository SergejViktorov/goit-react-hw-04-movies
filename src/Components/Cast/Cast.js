import { functionMovieCredits } from '../../services/ThemovieApi'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import defaultImg from '../../static/default.jpg'
import PropTypes from 'prop-types'

export default function Cast() {
	const location = useLocation()

	const [cast, setCast] = useState([])

	const { movieId } = useParams()

	useEffect(() => {
		async function fetch() {
			const castFilm = await functionMovieCredits(movieId)
			setCast(castFilm.data.cast)
		}
		fetch()
	}, [movieId])

	return (
		<ul>
			{cast.map(({ id, profile_path, name, character }) => {
				return (
					<li key={id}>
						<img
							src={
								profile_path
									? `https://image.tmdb.org/t/p/w500${profile_path}`
									: defaultImg
							}
							width="100px"
						></img>
						<p>{name}</p>
						<p>Character: {character}</p>
					</li>
				)
			})}
		</ul>
	)
}

Cast.propTypes = {
	id: PropTypes.number.isRequired,
	profile_path: PropTypes.string,
	name: PropTypes.string.isRequired,
	character: PropTypes.string.isRequired,
}
