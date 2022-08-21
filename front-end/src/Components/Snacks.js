import { Link } from 'react-router-dom';
function Snacks({ snack }) {
  return (
    <tr>
      <td>{snack.name.payload}</td>
      <td>{snack.fiber.payload}</td>
      <td>{snack.protein.payload}</td>
      <td>{snack.added_sugar.payload}</td>
      <td>
        <Link to={`/snacks/${snack.id.payload}`}>{snack.name.payload}</Link>
      </td>
    </tr>
  );
}

export default Snacks;
