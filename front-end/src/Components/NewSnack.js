import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function New_Snack() {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: '',
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: '',
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/snacks/new`, snack)
      .then((res) => {
        navigate('/snacks');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className='new'>
      <h1 className='title'>New Entry</h1>
      <div className='new-list'>
        <p>Snack Health is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>Fiber is above 5</li>
          <li>And sugar is less than 5</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='color2'>
          <label className='new-label' htmlFor='name'>
            Name
          </label>
          <input
            className='text'
            id='name'
            type='text'
            placeholder='Name Of Snack'
            required
            value={snack.name}
            onChange={handleTextChange}
          />
          <label className='new-label' htmlFor='protein'>
            Protein
          </label>
          <input
            className='text'
            id='protein'
            type='number'
            name='protein'
            value={snack.protein}
            placeholder='0'
            onChange={handleTextChange}
          />
          <label className='new-label' htmlFor='fiber'>
            Fiber
          </label>
          <input
            className='text'
            id='fiber'
            value={snack.fiber}
            type='number'
            placeholder='0'
            onChange={handleTextChange}
            required
          />
          <label className='new-label' htmlFor='added_sugar'>
            Added Sugar
          </label>
          <input
            className='text'
            id='added_sugar'
            type='number'
            name='added_sugar'
            value={snack.added_sugar}
            onChange={handleTextChange}
            placeholder='0'
          />
          <label className='new-label' htmlFor='image'>
            Image Url
          </label>
          <input
            className='text'
            id='image'
            type='text'
            placeholder='https://www.image.com'
            required
            value={snack.image}
            onChange={handleTextChange}
          />
          <br />
          <input className='button' type='submit' />
        </div>
      </form>
    </div>
  );
}
