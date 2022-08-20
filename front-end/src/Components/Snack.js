import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import regHeart from "../assets/heart-regular.png";

export default function Snack({ snack }) {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
        <img
          src={snack.image}
          alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
        />
        <img src={snack.is_healthy ? heartSolid : regHeart} alt="healthCheck" />
      </Link>
    </div>
  );
}
