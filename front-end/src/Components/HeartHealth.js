import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  const fullHeart = snackHealth ? heartSolid : heartOutline;
  return (
    <>
      <img src={fullHeart} alt="" />
    </>
  );
}

export default HeartHealth;
