import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Edit_Snack() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [snack, setSnack] = useState({
    name: '',
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: '',
  });

  const updateSnack = (updated_Snack) => {
    axios
      .put(`${API}/snacks/${id}`, updated_Snack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit Snack Entry</h1>
      <div className='edit-p'>
        <p>Snack Health is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>Fiber is above 5</li>
          <li>And sugar is less than 5</li>
        </ul>
      </div>
      
      <form className='form' onSubmit={handleSubmit}>
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
          onChange={handleTextChange}
          placeholder='0'
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
        <input type='submit' />
       
        </div>
        <Link to={`/snacks/${id}`}>
          <button className='edit-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
