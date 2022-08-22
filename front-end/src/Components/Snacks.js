import { Link } from 'react-router-dom';
import IsHealthy from './HeartHealth';
function Snacks({ snack }) {
  return (
    <tr>
      <td>
        <img src={`${snack.image}.jpg`} alt='Snack' />
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </td>
      <td>{snack.fiber}</td>
      <td>{snack.protein}</td>
      <td>{snack.added_sugar}</td>
      <td>
        <IsHealthy />
      </td>
    </tr>
  );
}

export default Snacks;
