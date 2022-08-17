import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const API = process.env.REACT_APP_API_URL;

const Show = () => {
	const [snack, setSnack] = useState([]);
	let id = useParams();
	const navigate = useNavigate;

	useEffect(() => {
		axios
			.get(`${API}/snacks/${id}`)
			.then((res) => {
				setSnack(res.data);
			})
			.catch((error) => {
				navigate('/new');
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
                navigate('/error')
            })
	};
	return (
		<div>
			<h1></h1>
		</div>
	);
};

export default Show;
