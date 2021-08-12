import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppBar from './Components/AppBar'
import Container from './Components/Container/Container'

const HomeView = lazy(() =>
	import('./views/HomeView.js' /* webpackChunkName: "HomeView" */)
)
const Move = lazy(() =>
	import('./views/Move.js' /* webpackChunkName: "Move" */)
)
const NotFoundHome = lazy(() =>
	import('./views/NotFoundHome.js' /* webpackChunkName: "NotFoundHome" */)
)
const MovieDetailsPage = lazy(() =>
	import(
		'./views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
	)
)

export default function App() {
	return (
		<Container>
			<AppBar />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact path="/">
						<HomeView />
					</Route>
					<Route exact path="/movies">
						<Move />
					</Route>
					<Route path="/movies/:movieId">
						<MovieDetailsPage />
					</Route>
					<Route>
						<NotFoundHome />
					</Route>
				</Switch>
			</Suspense>
			<ToastContainer position="top-right" autoClose={4000} />
		</Container>
	)
}
