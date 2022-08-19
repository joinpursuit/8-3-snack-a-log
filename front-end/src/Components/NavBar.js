import { Link } from 'react-router-dom';
import './styles/navbar.css'

export default function NavBar() {
  return (
    <nav>
      <h3>
        <Link to='/'>Home </Link>
      </h3>
      <h3>
        <Link to='/snacks'>Snacks <img className='cookie' src='https://cdn.shopify.com/s/files/1/0071/3195/5259/files/Cookie_Gif-300-80.gif?4519' alt='cookie'></img></Link>
      </h3>
      <h3>
        <Link to='/about'>About Us</Link>
      </h3>
      <button className='new-button'>
        <Link to='/snacks/new'>New</Link>
      </button>
    </nav>
  );
}
