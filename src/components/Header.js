import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="App-header">
            <nav className="nav">
                <ul className={`nav-list ${isMenuOpen ? 'nav-list--open' : ''}`}>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
        </header>
    )
}

export default Header;
