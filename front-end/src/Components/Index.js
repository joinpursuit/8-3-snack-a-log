import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './IndexStyle.css';
import HeartHealth from './HeartHealth';
// import SnackCard from './SnackCard.js';

const API = process.env.REACT_APP_API_URL;

// this is the index route

const Index = () => {
	const [snacks, setSnacks] = useState([]);
	// const id = useParams

	useEffect(() => {
		axios
			.get(`${API}/snacks`)
			.then((res) => {
				setSnacks(res.data.payload);
				// console.log(res.data)
				// console.log(snacks);
			})
			.catch((error) => {
				console.warn('error');
			});
	}, []);

	return (
		<section className="Snacks">
			<article className="Snacks">
				<div className="Snack">
		<body>
			<h1>Snacks</h1>
			
			{snacks.map((snack) => {
				return (
					<main>
						<HeartHealth snackHealth={snack} />
						<Link className="links" to={`/snacks/${snack.id}`}>
							<h4>{snack.name}</h4>
							<img className='Snacks' src={snack.image} alt={snack.name} />
						</Link>
					</main>
				);
			})}

			<br></br>
			<Link className="links" to={'/snacks/new'}>
				<button>Create A New Snack</button>
			</Link>
		</body>
		</div>
		</article>
		</section>
	);
};
export default Index;
