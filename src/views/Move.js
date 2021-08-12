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

	const sortOrder = location.search

	const onSubmitSearch = (value) => {
		setSearch(value)
		console.log('value', value)
		console.log('location', location)
		console.log('history', history)
	}

	useEffect(() => {
		if (search === '') {
			return
		}
		if (search) {
			history.push({
				...location,
				search: `?query=${search}`,
			})
		}

		async function fetch() {
			const film = await functionSearchMovies(search)
			setSearchFilms(film.data.results)
		}

		fetch()
	}, [search])

	console.log('location', location)

	return (
		<Container>
			<SearhFilm onSubmit={onSubmitSearch} />

			<SearchList options={searchFilms} />
		</Container>
	)
}
