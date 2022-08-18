import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Edit_Snack() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [snack, setSnack] = useState({
    name: '',
    fiber: '',
    protein: '',
    added_sugar: '',
    image: '',
  });

  const updateSnack = (updated_Snack) => {
    axios
      .put(`${API}/api/snacks/${id}`, updated_Snack)
      .then(
        () => {
          navigate(`/api/snacks/${id}`);
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
          onChange={handleTextChange}
          placeholder='0'
          required
        />
        <label className='new-label' htmlFor='protein'>
          Protein
        </label>
        <input
          className='text'
          id='Protein'
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
        <br />
        <Link to={`/snacks/${id}`}>
          <button className='button'>Back</button>
        </Link>
      </form>
    </div>
  );
}
