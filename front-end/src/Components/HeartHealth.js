import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <>
      <img
      src={snackHealth ? heartSolid : heartOutline}
      alt={snackHealth ? "healthy" : "unhealthy"}
    />
    </>
  );
}

export default HeartHealth;
