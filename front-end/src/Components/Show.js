import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';



const API = process.env.REACT_APP_API_URL;

const Show = () => {
	const [snack, setSnacks] = useState([]);
	const id = useParams();
	const navigate = useNavigate;

	useEffect(() => {
		axios
			.get(`${API}/snacks/${id}`)
			.then((res) => {
				setSnacks(res.data);
			})
			.catch((error) => {
				navigate('error');
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
                navigate('error')
            })
	};
	return (
		<div>
			<h1>Snacks</h1>

		
		</div>
	);
};

export default Show;
