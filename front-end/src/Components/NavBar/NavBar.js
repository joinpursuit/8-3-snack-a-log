import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
    <nav className="nav">
      <h1>
        <a className="wordmark" href="/">Snacks</a>
      </h1>
      &nbsp;
      <Link className="links" to="/">
        Home
      </Link>
      &nbsp;
      <Link className="links" to="/snacks">
        Snacks
      </Link>
      &nbsp;
      <Link className="links" to="/about">
        About
      </Link>
      <Link className="links" to="/snacks/new">
        <button className="nav-button">New Snack</button>
      </Link>
    </nav>
  );
};

export default NavBar;
