import React from 'react';
import error from '../../src/assets/error.png';

const FourOFour = () => {
  return (
    <div>
      <h2>Error! Page Not Found!</h2>
      <img src={error} alt='error page' />
    </div>
  );
};

export default FourOFour;
