function About() {
    return (
        <section id="about" className="section about">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-number">01.</span>
                    <h2>À propos de moi</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Développeur web passionné par la conception d'applications 
                            modernes, je me spécialise dans le développement full-stack.
                        </p>

                        <p>
                            J'aime transformer une idée en application fonctionnelle, 
                            de la conception de la base de données jusqu'au développement 
                            de l'interface utilisateur.
                        </p>

                        <p>
                            Mon parcours m'a permis de travailler avec différentes 
                            technologies Front-End et Back-End et de développer des 
                            applications utilisant notamment ReactJS, AngularJS, NodeJS, 
                            MySQL, PHP, Symfony, Laravel, Java, Spring Boot, FastAPI, Python.
                        </p>
                        
                        <p>
                            Je souhaite aujourd'hui continuer à développer mes compétences
                            à travers des projets professionnels, ambitieux et collaboratifs.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-item">
                            <span>Profil</span>
                            <strong>Développeur Full-Stack</strong>
                        </div>

                        <div className="about-card-item">
                            <span>Spécialité</span>
                            <strong>Applications Web</strong>
                        </div>

                        <div className="about-card-item">
                            <span>Formation</span>
                            <strong>Master Expert en architecture et développement logiciel option Lead Développement Full-Stack</strong>
                        </div>

                        <div className="about-card-item">
                            <span>Disponibilité</span>
                            <strong className="available">Alternance</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;