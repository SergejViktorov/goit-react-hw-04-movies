import { useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import s from './SearchFilm.module.css'

export default function SearhFilm({ onSubmit }) {
	const [value, setValue] = useState('')

	const handleSearchInput = (e) => {
		setValue(e.currentTarget.value.toLowerCase())
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (value.trim() === '') return toast.error('yps')
		onSubmit(value)

		reset()
	}

	const reset = () => {
		setValue('')
	}

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<input
				type="text"
				autocomplete="off"
				autofocus
				placeholder="Get movie"
				value={value}
				onChange={handleSearchInput}
				className={s.input}
			></input>
			<button type="submit">
				<span>Search</span>
			</button>
		</form>
	)
}

SearhFilm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}
