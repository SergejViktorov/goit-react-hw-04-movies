import React from 'react'
import MovieItem from './MovieItem'
import PropTypes from 'prop-types'

const MovieGallery = ({ options }) => {
	return (
		<ul>
			{options.map(({ original_title, id }) => {
				return <MovieItem original_title={original_title} id={id} />
			})}
		</ul>
	)
}
MovieGallery.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MovieGallery
