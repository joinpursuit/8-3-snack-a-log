import { Link } from 'react-router-dom';
function Snacks({ snack }) {
  return (
    <tr>
      <td>
        <img src={`${snack.image}.jpg`} />
      </td>
      <td>{snack.name}</td>
      <td>{snack.fiber}</td>
      <td>{snack.protein}</td>
      <td>{snack.added_sugar}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </td>
    </tr>
  );
}

export default Snacks;
