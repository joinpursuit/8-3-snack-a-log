import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <div className='navDiv'>
      <nav>
        <h1 className='title'>
          <Link className='active' to='/'>
            Snack App
          </Link>
        </h1>

        <button id='Create' className='button'>
          <Link className='active' to='snacks/new'>
            Create Snack
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
