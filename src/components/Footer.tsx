function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <a href="#home" className="footer-logo">
                    Hadil<span>.</span>
                </a>

                <p>
                    Conçu et développé avec React & TypeScript.
                </p>

                <p className="footer-copyright">
                    &copy; {currentYear}. Tous droits réservés.
                </p>

            </div> 
        </footer>
    );
}

export default Footer;