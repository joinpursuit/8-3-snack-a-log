import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Snacks from './Snacks';

function Show() {
  const URL = process.env.REACT_APP_API_URL;
  const [snacks, getSnack] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${id}`)
      .then((response) => getSnack(response.data.payload))
      .catch((error) => console.warn(error));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='snacks'>
      <section>
        <table>
          <thead>
            <tr>
              <img src={`${snacks.image}.jpg`}></img>
              <th>SNACK: {snacks.name}</th>
              <th>FIBER: {snacks.fiber}</th>
              <th>PROTEIN: {snacks.protein}</th>
              <th>ADDED SUGAR: {snacks.added_sugar}</th>
            </tr>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </thead>
        </table>
      </section>
    </div>
  );
}

export default Show;
