import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Edit.css';

const URL = process.env.REACT_APP_API_URL;

export default function Edit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: '',
    image: '',
    fiber: '',
    protein: '',
    added_sugar: '',
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(
        `https://fierce-badlands-55970.herokuapp.com/snacks/${id}` ||
          `${URL}/snacks/${id}`,
        updatedSnack,
      )
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.warn('catch', error));
  };

  useEffect(() => {
    axios
      .get(
        `https://fierce-badlands-55970.herokuapp.com/snacks/${id}` ||
          `${URL}/snacks/${id}`,
      )
      .then(
        (res) => setSnack(res.data.payload),
        (error) => navigate(`/not-found`),
      );
  }, [id, navigate]);

  /* handlebars */
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <>
      <div className='Edit'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            value={snack.name}
            onChange={handleTextChange}
            placeholder='Snack name'
            required
          />
          <label htmlFor='image'>Image: </label>
          <input
            id='image'
            type='text'
            value={snack.image}
            onChange={handleTextChange}
            required
          />
          <label htmlFor='fiber'>Fiber:</label>
          <input
            id='fiber'
            type='number'
            value={snack.fiber}
            onChange={handleTextChange}
            required
          />
          <label htmlFor='protein'>Protein:</label>
          <input
            id='protein'
            type='number'
            value={snack.protein}
            onChange={handleTextChange}
            required
          />
          <label htmlFor='added_sugar'>Added Sugar:</label>
          <input
            id='added_sugar'
            type='number'
            value={snack.added_sugar}
            onChange={handleTextChange}
            required
          />
          <div>
            <input id='editSubmit' type='submit' />
            <Link to={`/snacks/${id}`}>
              <button id='editBack'>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
