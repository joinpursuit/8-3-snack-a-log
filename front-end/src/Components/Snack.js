import HeartHealth from './HeartHealth';
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <div className='snack-card'>
      
      <Link to={`/snacks/`+snack.id} key={snack.id}>
        <img
          style={{ width: '200px', height: '200px' }}
          src={snack.image}
          alt=''
        />
         <p>{snack.name}</p>
      </Link>
      <p>{snack.fiber}</p>
      <p>{snack.protein}</p>
      <HeartHealth snackHealth={snack} />
   
    </div>
  );
}
