import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './IndexStyle.css';
import SnackCard from './SnackCard';


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
		
      {snacks.length > 0
        ? snacks.map((snack, index) => {
            return    <h1>Snacks</h1>,<SnackCard key={index} snack={snack} /> ; 
          })
        : null}
		<main>
		<article>
		
			<div className='Snack'>
				

			</div>
			
		</article>
		</main>
		
		
    </section>
		
		
	);
};
export default Index;
