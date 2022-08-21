import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function SnackEditForm() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [snack, setSnack] = useState({
    name: '',
    image: '',
    fiber: '',
    protein: '',
    added_sugar: '',
  });

  const updateSnack = (snack) => {
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then(() => navigate(`/snacks`))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((error) => console.error(error));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack);
  };

  return (
    <div className='New'>
      <div>
        <p>Snack Health is determined by</p>
        <ul>
          <li>protein is above 5 grams</li>
          <li>or fiber is above 5 grams</li>
          <li>and sugar is less than 5 grams</li>
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
}
