import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

const API = process.env.REACT_APP_API_URL;

// this is the index route

const Index = () => {
	const [snacks, setSnacks] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/snacks`)
			.then((res) => {
				setSnacks(res.data);
			})
			.catch((error) => console.log(error));
	});

	return (
		<div>
			<h1>Snacks</h1>
			<ul>
				{snacks.map((snack) => {
					return (
						<li>
							<p>{snack.name}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Index;
