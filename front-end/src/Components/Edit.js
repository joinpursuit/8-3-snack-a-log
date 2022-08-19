import axios from 'axios';
import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const Edit = () => {
	const navigate = useNavigate();
	let id = useParams();
	const [snack, setSnack] = useState({
		id: '',
		name: '',
		fiber: 0,
		protein: 0,
		added_sugar: 0,
		is_healthy: false,
		image: '',
	});

	const editForm = (event) => {
		setSnack({ ...snack, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		axios
			.get(`${API}/snacks/${id}`)
			.then((res) => {
				setSnack(res.data);
			})
			.catch();
	}, [id]);

	const handleEdit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/snacks/${id}`, snack)
			.then(() => {
				navigate(`/snacks/${id}`);
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	return (
		<div>
			<form onSubmit={handleEdit}>
				<label for='name'>Name:</label>
				<input
					id='name'
					type='text'
					value={snack.name}
					onChange={editForm}
					required
				/>
				<br></br>
				<label for='image'>Image:</label>
				<input
					id='image'
					type='text'
					value={snack.image}
					onChange={editForm}
					required
				/>
				<br></br>
				<label for='fiber'>Fiber:</label>
				<input
					id='fiber'
					type='number'
					value={snack.fiber}
					onChange={editForm}
					required
				/>
				<br></br>
				<label for='protein'>Protein:</label>
				<input
					id='protein'
					type='number'
					value={snack.protein}
					onChange={editForm}
					required
				/>
				<br></br>
				<label for='added_sugar'>Added Sugar:</label>
				<input
					id='added_sugar'
					type='number'
					value={snack.added_sugar}
					onChange={editForm}
					required
				/>
				<br></br>
				<Link to='/snacks'>
					<button type='submit'>Edit Snack</button>
				</Link>
			</form>
		</div>
	);
};

export default Edit;
