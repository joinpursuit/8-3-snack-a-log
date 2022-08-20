import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/snacks/new'>New Snack</Link>
    </nav>
  );
};

export default NavBar;
