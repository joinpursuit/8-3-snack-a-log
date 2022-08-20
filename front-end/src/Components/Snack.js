import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {
  return (
    <div className="Snack">
      <h4> <span><img src={snack.image} alt={snack.name}  /></span></h4>
      <Link to={`/snacks/${snack.id}`}>
        <h4>{snack.name}</h4>
        <h4><HeartHealth snackHealth={snack.is_healthy} /></h4>
      </Link>
    </div>
  );
}

export default Snack;