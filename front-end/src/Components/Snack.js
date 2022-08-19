import HeartHealth from './HeartHealth';
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <div className='snack-card'>
      
      <Link to={`/snacks/`+snack.id} key={snack.id}>
        <img className='snack-pic'
          style={{ width: '225px', height: '225px' }}
          src={snack.image}
          alt=''
        />
         <p className='snack-name'>{snack.name}</p>
      </Link>
      <div className='health'>
      <HeartHealth  snackHealth={snack} />
      </div>
    </div>
  );
}
