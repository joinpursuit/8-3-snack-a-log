import axios from 'axios';
import Snack from './Snack';
import React, { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks/`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <section className='Snacks'>
      {snacks.length > 0
        ? snacks.map((snack, index) => {
            return <Snack key={index} snack={snack} />;
          })
        : null}
    </section>
  );
};

export default Snacks;
