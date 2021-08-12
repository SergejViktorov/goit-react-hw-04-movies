import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieItem = ({ original_title, id }) => {
	const location = useLocation()

	console.log('MovieItem', location)
	return (
		<li key={id}>
			<Link
				to={{
					pathname: `/movies/${id}`,
					state: { from: location },
				}}
			>
				{original_title}
			</Link>
		</li>
	)
}

MovieItem.propTypes = {
	original_title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
}

export default MovieItem
