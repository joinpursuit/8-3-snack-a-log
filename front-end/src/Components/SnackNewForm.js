import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const SnackNewForm = () => {
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: '',
    fiber: '',
    protein: '',
    added_sugar: '',
    image: '',
  });

  const addNewSnack = (snack) => {
    axios
      .post(`${API}/snacks`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((err) => console.error(err));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSnack(snack);
  };

  return (
    <div className='New'>
      <div>
        <p>Snack Health is determined by</p>
        <ul>
          <li>protein is above 5</li>
          <li>or fiber is above 5</li>
          <li>and sugar is less than 5</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Snack Name:</label>
        <input
          id='name'
          value={snack.name}
          type='text'
          onChange={handleTextChange}
          placeholder='snack name...'
          required
        />
        <label htmlFor='image'>Image URL:</label>
        <input
          id='image'
          type='text'
          value={snack.image}
          onChange={handleTextChange}
          placeholder='http://...'
          required
        />
        <label htmlFor='fiber'>Fiber:</label>
        <input
          id='fiber'
          type='number'
          value={snack.fiber}
          onChange={handleTextChange}
          placeholder='fiber...'
          required
        />
        <label htmlFor='protein'>Protein:</label>
        <input
          id='protein'
          type='number'
          value={snack.protein}
          onChange={handleTextChange}
          placeholder='protein...'
          required
        />
        <label htmlFor='added_sugar'>Added Sugar:</label>
        <input
          id='added_sugar'
          type='number'
          value={snack.added_sugar}
          onChange={handleTextChange}
          placeholder='sugar...'
          required
        />

        <div>
          <input type='submit' />
          <Link to='/snacks'>
            <button>Go Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SnackNewForm;
