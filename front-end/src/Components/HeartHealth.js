import heartSolid from '../assets/heart-solid.png';
import heartOutline from '../assets/heart-regular.png';

const HeartHealth = ({ healthCheck }) => {
  return (
    <span>
      <img
        className='heartImg'
        src={healthCheck ? heartSolid : heartOutline}
        alt={healthCheck ? 'healthy food' : 'unhealthy food'}
      />
    </span>
  );
};

export default HeartHealth;
