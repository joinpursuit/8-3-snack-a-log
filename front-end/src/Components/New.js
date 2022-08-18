import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const New = () => {
	const navigate = useNavigate();
	const [snack, setSnack] = useState({
		id: '',
		name: '',
		fiber: 0,
		protein: 0,
		added_sugar: 0,
		is_healthy: false,
		image: '',
	});

	const newForm = (event) => {
		setSnack({ ...snack, [event.target.id]: event.target.value });
	};

	// form submission

	const handleForm = (event) => {
		event.preventDefault();
		axios
			.get(`${API}/snacks/new`, snack)
			.then(() => {
				navigate('/snacks');
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	return (
		<div>
			<h1>Snacks</h1>
			<form onSubmit={handleForm}>
				<label for='name'>Name:</label>
				<input
					id='name'
					type='text'
					value={snack.name}
					onChange={newForm}
					required
				/>
				<br></br>
				<label for='image'>Image:</label>
				<input
					id='image'
					type='text'
					value={snack.image}
					onChange={newForm}
					required
				/>
				<br></br>
				<label for='fiber'>Fiber:</label>
				<input
					id='fiber'
					type='number'
					value={snack.fiber}
					onChange={newForm}
					required
				/>
				<br></br>
				<label for='protein'>Protein:</label>
				<input
					id='protein'
					type='number'
					value={snack.protein}
					onChange={newForm}
					required
				/>
				<br></br>
				<label for='added_sugar'>Added Sugar:</label>
				<input
					id='added_sugar'
					type='number'
					value={snack.added_sugar}
					onChange={newForm}
					required
				/>
				<br></br>
				<Link to='/snacks'>
					<button type='submit'>Submit New Snack Form</button>
				</Link>
			</form>
		</div>
	);
};

export default New;
