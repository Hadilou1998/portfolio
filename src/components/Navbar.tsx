function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="#home" className="logo">
                    Hadil<span>.</span>
                </a>
                
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">A propos</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#experience">Expériences</a>
                    </li>
                    <li>
                        <a href="#education">Formation</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;