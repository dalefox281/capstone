import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="Nav">
                <ul>
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-item'>About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking" className='nav-item'>Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order-online">Order Online</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                </ul>
        </nav>
    );
};

export default Nav;