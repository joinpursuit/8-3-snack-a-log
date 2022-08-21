import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import HeartHealth from './HeartHealth.js';

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
	}, [id, navigate]);

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
		<section>
		  <div>
			<aside>
			  <HeartHealth healthCheck={snack.is_healthy} />
			</aside>
			<h4>{snack.name}</h4>
			<aside>
			  <div className='img'>
				{snack.is_healthy ? (
				  <img src={snack.image} alt='healthy food' />
				) : (
				  <img src={snack.image} alt='unhealthy food' />
				)}
			  </div>
			</aside>
		  </div>
		  <div>
			<h5> Nutritional Information:</h5>
		  </div>
		  <div>Fiber: {snack.fiber}</div>
		  <div>Protein: {snack.protein}</div>
		  <div>Added Sugar: {snack.added_sugar}</div>
		  <div>
			{snack.is_healthy ? (
			  <h4>This is a healthy snack</h4>
			) : (
			  <h4>This is not a healthy snack</h4>
			)}
		  </div>
		  <div>
			<Link to='/snacks'>
			  <button>Back</button>
			</Link>
			<button>
			  <Link to={'/snacks/new'}>New</Link>
			</button>
			<button onClick={deleteSnack}>Delete</button>
		  </div>
		  </section>
	  );
}

export default Show;