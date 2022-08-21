import './NavBar.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar-header'>
        <Link to='/snacks'>SHOW SNACKS</Link>
      </h1>
      <div className='navbar-icons'>
        <Link to='/'>
          <AiFillHome size={50} />
        </Link>
        <Link to='/about'>
          <BsPeopleFill size={50} />
        </Link>
      </div>

      <button className='navbar-btn'>
        <Link to='/snacks/new'>Add New Snack</Link>
      </button>
    </nav>
  );
};

export default NavBar;
