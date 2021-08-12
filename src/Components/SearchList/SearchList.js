import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import Container from '../Container/Container'
import PropTypes from 'prop-types'

export default function SearchList({ options }) {
	const { url } = useRouteMatch()
	return (
		<Container>
			<ul>
				{options.map((film) => (
					<li key={film.id}>
						<NavLink
							to={{
								pathname: `${url}/${film.id}`,
								state: { from: 5 },
							}}
						>
							{film.original_title}
						</NavLink>
					</li>
				))}
			</ul>
		</Container>
	)
}

SearchList.propTypes = {
	options: PropTypes.array.isRequired,
}
