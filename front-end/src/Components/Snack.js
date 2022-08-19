import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

function Snack({ snack }) {
  return (
    <tr>
      <td>{snack.name}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>😋</Link>
      </td>
      <>
        <img src={snack ? heartSolid : heartRegular} alt="" />
      </>
    </tr>
  );
}
export default Snack;
