import axios from 'axios';
import React, { useState, useEffect } from 'react';
import heartSolid from '../assets/heart-solid.png';
import heartRegular from '../assets/heart-regular.png';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const SnackDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data.payload))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => navigate('/snacks'))
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <article>
        <h3>Snack brand: {snack.name}</h3>
        <div className='snack__image'>
          <img src={snack.image} alt={snack.name} />
        </div>
        <h3>Nutrition Information:</h3>
        <div>Fiber: {snack.fiber}</div>
        <div>Protein: {snack.protein}</div>
        <div>Added Sugar: {snack.added_sugar}</div>
      </article>
      <aside>
        <img
          src={snack.is_healthy ? heartSolid : heartRegular}
          alt={snack.is_healthy ? 'healthy food' : 'not so good snack'}
        />
      </aside>

      <div>
        <Link to='/snacks'>
          <button>Back</button>
        </Link>
        <button>
          <Link to={`/snacks/${id}/edit`}>Edit</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
};

export default SnackDetail;
