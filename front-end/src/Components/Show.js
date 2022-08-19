import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import HeartHealth from '../Components/HeartHealth.js';

const API = process.env.REACT_APP_API_URL;

const Show = () => {
	const [snack, setSnack] = useState([]);
	const { id } = useParams();
	// console.log(id)
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/snacks/${id}`)
			.then((res) => {
				setSnack(res.data.payload);
				
			})
			.catch((error) => {
				console.warn(error);
			});
	}, [id]);

	// here we delete!
	const deleteSnack = () => {
		axios
			.delete(`${API}/snacks/${id}`)
			.then(() => {
				navigate('/snacks');
			})
			.catch((error) => {
				console.warn(error);
			});
	};
	return (
		<article>
			<h1>Snacks</h1>
			<aside>
				<HeartHealth snackHealth={snack.is_healthy} />
			</aside>
			<h3>{snack.name}</h3>
			<div>
				<img src={snack.image} alt={snack.name} />

				<p>Protein: {snack.protein}</p>
				<p>Fiber: {snack.fiber}</p>
				<p>Added Sugar: {snack.added_sugar}</p>
			</div>

			<Link to={`/snacks`}>
				<button>Back</button>
			</Link>
			<br></br>
			<Link to={`/snacks/${id}/edit`}>
				<button>Edit Snacks!</button>
			</Link>
			<br></br>
			<button onClick={deleteSnack}>Delete A Snack</button>
		</article>
	);
};

export default Show;
