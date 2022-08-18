import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function New_Snack() {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: '',
    fiber: '',
    protein: '',
    added_sugar: '',
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
      <div>
        <p>Snack Health is determined by</p>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
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
        <br />
        <input className='button' type='submit' />
      </form>
    </div>
  );
}
