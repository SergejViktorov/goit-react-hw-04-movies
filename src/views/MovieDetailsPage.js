import { useEffect, useState, lazy, Suspense } from 'react'
import {
	useParams,
	NavLink,
	useRouteMatch,
	Route,
	useLocation,
	useHistory,
} from 'react-router-dom'
import { functionMovieDetails } from '../services/ThemovieApi'
import s from './MovieDetailsPage.module.css'
import defaultImg from '../static/default.jpg'

const Cast = lazy(() =>
	import('../Components/Cast/Cast.js' /* webpackChunkName: "Cast" */)
)
const Reviews = lazy(() =>
	import('../Components/Reviews/Reviews.js' /* webpackChunkName: "Reviews" */)
)

export default function MovieDetailsPage() {
	const location = useLocation()
	const history = useHistory()
	console.log('MovieDetailsPageLocation', location)
	console.log('MovieDetailsPageHistory', history)

	const { url } = useRouteMatch()

	const { movieId } = useParams()
	const [film, setFilm] = useState([])
	const filmGenres = film.genres

	useEffect(() => {
		async function fetch() {
			const thisFilm = await functionMovieDetails(movieId)
			setFilm(thisFilm.data)
		}
		fetch()
	}, [movieId])

	const onGoBack = () => {
		history.push(location?.state?.from ?? '/')
		// history.goBack()
	}

	return (
		<>
			<button type="button" onClick={onGoBack}>
				"Back"
			</button>
			<hr />
			<img
				src={
					film.backdrop_path
						? `https://image.tmdb.org/t/p/w300${film.backdrop_path}`
						: defaultImg
				}
				alt=""
				width="300px"
			></img>
			<div>
				<h2>{film.original_title}</h2>
				<h3>Overwiew</h3>
				<p>{film.overview}</p>
				<h4>Genres</h4>
				<ul>
					{filmGenres &&
						filmGenres.map((genre) => {
							return (
								<li key={genre.id} className={s.genres}>
									<p>{genre.name}</p>
								</li>
							)
						})}
				</ul>
			</div>
			<hr />
			<div>
				<p>Additonal information</p>
				<NavLink
					className={s.linkDetals}
					to={{
						pathname: `${url}/cast`,
						state: {
							from: location.state.from,
						},
					}}
				>
					Cast
				</NavLink>
				<NavLink
					className={s.linkDetals}
					to={{
						pathname: `${url}/reviews`,
						state: {
							from: location.state.from,
						},
					}}
				>
					Reviews
				</NavLink>
			</div>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Route path="/movies/:movieId/cast">
					<Cast />
				</Route>
				<Route path="/movies/:movieId/reviews">
					<Reviews />
				</Route>
			</Suspense>
		</>
	)
}
