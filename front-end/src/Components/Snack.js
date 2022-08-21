import React from 'react';
import { Link } from 'react-router-dom';
import HeartHealth from './HeartHealth.js';

const Snack = ({ snack }) => {
  return (
    <article className='Snack'>
      <h4>{snack.name}</h4>
      <span>
        <HeartHealth healthCheck={snack.is_healthy} />
      </span>
      <div className='Snack__image'>
        <img
          src={snack.image}
          alt={snack.is_healthy ? 'healthy foodd' : 'unhealthy food'}
        />
      </div>
      <button>
        <Link to={`/snacks/${snack.id}`}>Snack's Nutrition Details</Link>
      </button>
    </article>
  );
};

export default Snack;
