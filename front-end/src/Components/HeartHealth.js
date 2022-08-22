import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ healthCheck }) {
  return (
    <>
    <h4>
      <img className="hearts"
      src={healthCheck ? heartSolid : heartOutline}
      alt={healthCheck ? "healthy food" : "unhealthy food"}
    />
    </h4>
    </>
  );
}

export default HeartHealth;
