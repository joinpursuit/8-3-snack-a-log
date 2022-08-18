import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <nav>
        <h1>Snacks
            <button>New Snacks
            <Link to="/snacks/new"></Link>
            </button>
        </h1>
    </nav>
)
}

export default NavBar;