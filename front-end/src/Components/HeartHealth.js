import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ healthCheck }) {
  return (
    <>
      <p><img src={healthCheck ? heartSolid : heartOutline} alt={healthCheck ? "healthy snack" : "unhealthy snack"} /></p>
    </>
  );
}

export default HeartHealth;
