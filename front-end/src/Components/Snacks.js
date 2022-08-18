import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Snack from './Snack';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios.get(`${API}/snacks`).then((res) => {
      setSnacks(res.data.payload);
    });
  }, []);

  return (
    <div className='Snacks'>
      <h1>Snacks</h1>
      <section>
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </section>
      <br />
      <button className='back-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
}
