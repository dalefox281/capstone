import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='Footer'>
            <img src={require('../Images/lunchSign.jpg')} alt='lunch sign' width={180}></img>

            <menu>
                Doormat Navigation
                <ul>
                    <li>
                        <Link to="/" className="footer-nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="footer-nav-item">About</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="footer-nav-item">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking" className="footer-nav-item">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order-online" className="footer-nav-item">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login" className="footer-nav-item">Login</Link>
                    </li>
                </ul>
            </menu>

            <menu>
                Contact
                <ul>
                    <li>
                        <a href='/Address'>Address</a>
                    </li>
                    <li>
                        <a href='/PhoneNumber'>Phone Number</a>
                    </li>
                    <li>
                        <a href='/EmailUs'>Email Us</a>
                    </li>
                </ul>
            </menu>

            <menu>
                Social Media Links
                <ul>
                    <li>
                        <a href='/FacebookLink'>Facebook</a>
                    </li>
                    <li>
                        <a href='/InstagramLink'>Instagram</a>
                    </li>
                    <li>
                        <a href='twitterLink'>X</a>
                    </li>
                </ul>
            </menu>

        </footer>
    );
};

export default Footer;