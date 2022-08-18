import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import heartSolid from '../assets/heart-solid.png';
import heartOutline from '../assets/heart-regular.png';

const API = process.env.REACT_APP_API_URL;

// this is the index route

const Index = () => {
	const [snacks, setSnacks] = useState([]);
	// const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/snacks`)
			.then((res) => {
				setSnacks(res.data);
			})
			.catch((error) => {
				console.warn('error');
			});
	});

	return (
		<section className='Snacks'>
			{/* h1 needs font Carter One cursive */}
			<h1>Snacks</h1>
			{/* body needs font Overlock cursive */}

			{/* has main with width 90 and centered using margin auto */}
			<main>
				<ul>
					{snacks.map((snack) => {
						return (
							<li>
								<p>
									{snack.name}
									{snack.is_healthy ? heartSolid : heartOutline}
								</p>
								<Link to='/show'>Show Snack</Link>
								<a href="/new"></a>
							</li>
						);
					})}
				</ul>
			</main>
		</section>
	);
};
export default Index;
