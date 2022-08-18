import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <p>
      <img src={snackHealth ? heartSolid : heartOutline} 
      alt={snackHealth ? "healthy food" : "unhealthy food"}/>
    </p>
  );
}

export default HeartHealth;
