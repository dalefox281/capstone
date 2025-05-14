

function Footer() {
    return (
        <footer>
            <img src={require('../Images/lunchSign.jpg')} alt='lunch sign' width={180}></img>

            <menu>
                Doormat Navigation
                <ul>
                    <li>
                        <a href='/Home'>Home</a>
                    </li>
                    <li>
                        <a href='/About'>About</a>
                    </li>
                    <li>
                        <a href='/Menu'>Menu</a>
                    </li>
                    <li>
                        <a href='/Reservations'>Reservations</a>
                    </li>
                    <li>
                        <a href='/OrderOnline'>Order Online</a>
                    </li>
                    <li>
                        <a href='/Login'>Login</a>
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
                        <a href='EmailUs'>Email Us</a>
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