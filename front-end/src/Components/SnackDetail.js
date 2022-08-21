import axios from 'axios';
import HeartHealth from './HeartHealth';
import React, { useState, useEffect } from 'react';
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
    <article>
      <div>
        <aside>
          <HeartHealth healthCheck={snack.is_healthy} />
        </aside>

        <h4>{snack.name}</h4>

        <article>
          <div>
            <img src={snack.image} alt={snack.name} />
          </div>
        </article>
      </div>

      <div>
        <h5>Snack's Nutrition Information:</h5>
      </div>

      <div>Fiber: {snack.fiber} grams</div>
      <div>Protein: {snack.protein} grams</div>
      <div>Added Sugar: {snack.added_sugar} grams</div>

      <div>
        {snack.is_healthy ? (
          <h4>This is a healthy snack</h4>
        ) : (
          <h4>This is not a healthy snack</h4>
        )}
      </div>

      <div>
        <Link to='/snacks'>
          <button>Go Back</button>
        </Link>

        <Link to={`/snacks/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
};

export default SnackDetail;
