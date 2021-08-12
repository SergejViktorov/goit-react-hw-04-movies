import MovieGallery from '../Components/MovieGallery/MovieGallery'
import { fetchTrending } from '../services/ThemovieApi'

import { useEffect, useState } from 'react'
export default function HomeView() {
	const [move, setMove] = useState([])

	useEffect(() => {
		async function fetch() {
			const traidingMove = await fetchTrending()
			setMove((prevState) => [...prevState, ...traidingMove.data.results])
			console.log(move)
		}
		fetch()
	}, [])

	return (
		<>
			<h1>Trending to day</h1>
			<MovieGallery options={move} />
		</>
	)
}
