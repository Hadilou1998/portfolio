function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-intro">Bonjour, je suis</p>

                <h1>
                    Hadil <span>ISSILAME</span>
                </h1>

                <h2>Développeur Full-Stack</h2>

                <div className="availability-badge">
                    <span className="availability-dot"></span>

                    Recherche d'une alternance - Octobre 2026
                </div>

                <p className="hero-description">
                    Je conçois des applications web modernes, performantes et intuitives, du développement de l'interface utilisateur jusqu'à la conception des API et des bases de données.
                </p>

                {/* Rythme d'alternance */}
                <p className="alternance-rhythm">
                    Rythme : 3 semaines en entreprise / 1 semaine à l'école
                </p>

                <div className="hero-technologies">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>SQL</span>
                    <span>Angular</span>
                    <span>PHP</span>
                    <span>Symfony</span> 
                    <span>Laravel</span>
                    <span>Python</span>
                    <span>FastAPI</span>
                </div>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        Découvrir mes projets
                    </a>
                    <a href="/CV_092026_Hadil_ISSILAME_V4.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
                        Voir mon CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;