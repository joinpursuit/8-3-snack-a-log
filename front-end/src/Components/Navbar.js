import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Go home</Link>
      </h1>
      <h1>
        <Link to="/snacks">snacks</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New snack</Link>
      </button>
    </nav>
  );
}
