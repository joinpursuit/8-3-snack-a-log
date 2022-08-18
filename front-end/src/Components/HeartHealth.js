import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return <>{snackHealth ? heartSolid : heartOutline}</>;
}

export default HeartHealth;
