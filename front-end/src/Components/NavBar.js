import { Link } from 'react-router-dom';
import './styles/navbar.css'

export default function NavBar() {
  return (
    <nav>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
      <h3>
        <Link to='/snacks'>Snacks</Link>
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
