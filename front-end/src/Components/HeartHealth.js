import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  const fullHeart = snackHealth ? heartSolid : heartOutline;
  return (
    <span>
      <img
        width="25"
        height="25"
        src={fullHeart}
        alt={snackHealth ? "healthy food" : "unhealthy food"}
      />
    </span>
  );
}

export default HeartHealth;
