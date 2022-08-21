import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../src/assets/error.png';

const FourOFour = () => {
  return (
    <div>
      <h2>
        😂 You're Busted Bro! No Snacks For You Here! Good Luck Next Time! 😂{' '}
      </h2>
      <Link to='/'>
        <img src={error} alt='error page' />
      </Link>
    </div>
  );
};

export default FourOFour;
