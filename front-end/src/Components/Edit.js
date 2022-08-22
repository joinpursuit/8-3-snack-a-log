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
				setSnack(res.data.payload);
			})
			.catch();
	}, [id]);

	const handleEdit = (edit) => {
		axios
			.put(`${API}/snacks/${id}`, edit)
			.then(() => {
				navigate(`/snacks`);
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleEdit(snack, id);
	};

	return (
		<div>
            <article>
			<aside>
				<h5>Snack Health is determined by</h5>
				<ul>
					<li>protein is above 5 grams</li>
					<li>or fiber is above 5 grams</li>
					<li>and sugar is less than 5 grams</li>
				</ul>
                </aside>
                </article>

                <header>
                    <img src="https://snackish.net/wp-content/uploads/2019/05/snack-ish-black.png" alt="" />
                </header>
			<form onSubmit={handleSubmit}>
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
