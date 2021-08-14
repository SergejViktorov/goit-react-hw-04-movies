import React from 'react'
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import Container from '../Container/Container'
import PropTypes from 'prop-types'

export default function SearchList({ options }) {
	const { url } = useRouteMatch()
	const location = useLocation()
	const history = useHistory()
	console.log('SearchListLocation', location)
	console.log('SearchListHistory', history)

	return (
		<Container>
			<ul>
				{options.map((film) => (
					<li key={film.id}>
						<Link
							to={{
								pathname: `${url}/${film.id}`,
								// search:
								state: {
									from: location,
								},
							}}
						>
							{film.original_title}
						</Link>
					</li>
				))}
			</ul>
		</Container>
	)
}

SearchList.propTypes = {
	options: PropTypes.array.isRequired,
}
