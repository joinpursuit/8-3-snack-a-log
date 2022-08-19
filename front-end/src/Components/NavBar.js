import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
return (
    <nav className="nav">
     
        <h1>Snacks</h1>
            &nbsp;
            <Link className="links" to="/snacks/new">
            <button className="nav-button">New Snacks</button>
            </Link>
            
       
    </nav>
)
}

export default NavBar;