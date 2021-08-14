import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { functionSearchMovies } from '../services/ThemovieApi'
import SearhFilm from '../Components/SearhFilm/SearhFilm'
import SearchList from '../Components/SearchList/SearchList'
import Container from '../Components/Container/Container'

export default function Movie() {
	const [search, setSearch] = useState('')
	const [searchFilms, setSearchFilms] = useState([])
	const location = useLocation()
	const history = useHistory()
	const searchOrder = new URLSearchParams(location.search).get('query') ?? ''

	const onSubmitSearch = (value) => {
		setSearch(value)
		history.push({ ...location, search: `?query=${value}` })
	}

	useEffect(() => {
		async function fetch() {
			const film = await functionSearchMovies(
				search === '' ? searchOrder : search
			)
			setSearchFilms(film.data.results)
		}

		fetch()
	}, [search, searchOrder])

	return (
		<Container>
			<SearhFilm onSubmit={onSubmitSearch} />

			<SearchList options={searchFilms} />
		</Container>
	)
}
