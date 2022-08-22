import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeartHealth from './HeartHealth';

const API = process.env.REACT_APP_API_URL;

export default function Snack_Details() {
  const [snack, setSnacks] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnacks(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate('/snacks');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='show'>
      <h1 className='show-title'>{snack.name}</h1>
      <div className="heart"><HeartHealth  snackHealth={snack} /></div>
        <img className='details_image' src={snack.image} alt=''></img>
        <br></br>
        <div className='show-info'>
        <h2 className='show_p'>
        <span>Name: </span> {snack.name}
      </h2>
      <h2 className='show_p'>
        <span>Fiber: </span> {snack.fiber}
      </h2>
      <h2 className='show_p'>
        <span>Protein: </span> {snack.protein}
      </h2>
      <h2 className='show_p'>
        <span>Added Sugar:</span> {snack.added_sugar}
      </h2>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/snacks`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${snack.id}/edit`}>
            <button className='show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
