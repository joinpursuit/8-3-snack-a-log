import heartSolid from '../assets/heart-solid.png';
import heartOutline from '../assets/heart-regular.png';

function IsHealthy({ protein, fiber, added_sugar }) {
  if ((protein > 5 || fiber > 5) && added_sugar < 5) {
    return <img src={heartSolid} alt='Healthy' />;
  } else if ((protein < 5 || fiber < 5) && added_sugar > 5) {
    return <img src={heartOutline} alt='notHealthy' />;
  } else {
    return <img src={heartOutline} alt='notHealthy' />;
  }
}

export default IsHealthy;
