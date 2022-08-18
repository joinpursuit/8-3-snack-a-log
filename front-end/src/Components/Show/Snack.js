import './Show.scss';
import HeartHealth from '../HeartHealth';
import { Link } from 'react-router-dom';

const Snack = ({ snack }) => {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
        <h4>
          {snack.name} <HeartHealth healthCheck={snack.is_healthy} />
        </h4>
      </Link>
      <img src={snack.image} alt={snack.name} />
    </div>
  );
};

export default Snack;
