import Nav from './Nav';

function Header() {
    return (
        <header className='App-header'>
            <img src={require('../Images/logo.png')} alt='Logo'></img>
            <Nav />
        </header>
    );
};
export default Header;