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
			<h3>{snack.name}</h3>
		  </div>
		
		  <article>
		<aside>
		  <div>
		  
			<img src={snack.image} alt={snack.name}/>
			<h5> Nutritional Information:</h5>
		  </div>
		  <div>Fiber: {snack.fiber}</div>
		  <div>Protein: {snack.protein}</div>
		  <div>Added Sugar: {snack.added_sugar}</div>
		  <div>
			{snack.is_healthy ? (
			  <h4>Healthy snack</h4>
			) : (
			  <h4>Unhealthy snack</h4>
			)}
			 
		
		 
		
			<Link to='/snacks'>
			  <button>Back</button>
			</Link>
			<button>
			  <Link to={'/snacks/new'}>New</Link>
			</button>
			<button onClick={deleteSnack}>Delete</button>
			</div>
		 
		 </aside>
		 </article>
		  </section>
		  
	  );
}

export default Show;