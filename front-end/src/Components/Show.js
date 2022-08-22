import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
          </thead>
          {/* <tbody>
            {snacks.map((snack) => {
              return <Snacks key={snack.id} snack={snack} />;
            })}
          </tbody> */}
        </table>
      </section>
    </div>
  );
}

export default Show;
