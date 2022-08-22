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

	const handleForm = (snack) => {
		axios
			.post(`${API}/snacks`, snack)
			.then(() => {
				navigate('/snacks');
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	const submitForm = (event) => {
		event.preventDefault();
		handleForm(snack);
	};

	const checkBox = () => {
		setSnack({ ...snack, is_healthy: !snack.is_healthy });
	};

	return (
		<div>
			<h1>Snacks</h1>

			<div>
				<h5>Snack Health is determined by</h5>
				<ul>
					<li>protein is above 5 grams</li>
					<li>or fiber is above 5 grams</li>
					<li>and sugar is less than 5 grams</li>
				</ul>
			</div>
			<form onSubmit={submitForm}>
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
					alt='snack'
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

				<label for='health'>Is this a healthy snack?</label>
				<input type='checkbox' name='healthy' onClick={checkBox} id='healthy' />
				<br></br>
				<Link to='/snacks'>
					<button type='submit'>Submit</button>
				</Link>
			</form>
		</div>
	);
};

export default New;
