type ExperienceItem = {
    period: string;
    title: string;
    organization: string;
    location: string;
    description: string[];
    technologies: string[];
};

const experiences: ExperienceItem[] = [
    {
        period: "10/2025 - 12/2025",
        title: "Developpeur Web",
        organization: "Innovqube",
        location: "Paris",
        description: [
            "Développement de nouvelles fonctionnalités avec Laravel, Livewire et Filament.",
            "Correction de bugs et amélioration des performances.",
            "Optimisation de l'interface utilisateur (UI/UX).",
        ],
        technologies: ["Laravel", "Livewire", "Filament", "UI/UX"],
    },

    {
        period: "11/2024 - 01/2025",
        title: "Concepteur Développeur d'Applications",
        organization: "Socializus & LegOmnia",
        location: "Paris",
        description: [
            "Résolution de bugs sur des applications web et mobiles.",
            "Développement de scripts Python pour l'automatisation et la pseudonymisation.",
            "Amélioration d'interfaces React et React Native."
        ],
        technologies: ["Python", "React", "React Native"],
    },

    {
        period: "12/2021 - 09/2022",
        title: "Développeur Full-Stack",
        organization: "Mairie de Paris",
        location: " Paris",
        description: [
            "Création et maintenance de plugins internes pour les agents municipaux.",
            "Intégration graphique en JavaScript avec Shepherd.js.",
            "Participation aux cérémonies Agile et au travail d'équipe.",
        ],
        technologies: ["Java", "Spring", "Maven", "J2EE", "JavaScript", "Shepherd.js"],
    },

    {
        period: "03/2021 - 06/2021",
        title: "Développeur Web",
        organization: "Association DIEL(Droit d'Ici Et Là-bas)",
        location: "Paris",
        description: [
            "Rédaction du cahier des charges.",
            "Conception technique et développement de l'application web.",
            "Mise en place de la base de données et déploiement du site final.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },

    {
        period: "12/2019 - 01/2020",
        title: "Développeur Web",
        organization: "INNOGEN SAS",
        location: "Paris",
        description: [
            "Création de formulaires Wordpress.",
            "Retouches graphiques et maintenance.",
        ],
        technologies: ["Wordpress", "Photoshop", "CSS", "HTML"],
    },

    {
        period: "05/2019 - 06/2019",
        title: "Développeur Web Junior",
        organization: "SIMBA Consulting",
        location: "Les Pavillons-sous-Bois",
        description: [
            "Création d'un site statique pour une association HTML/CSS.",
        ],
        technologies: ["HTML", "CSS"],
    },
];

function Experience() {
    return (
        <section id="experience" className="section experience">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-number">04.</span>
                    <h2>Expériences professionnelles</h2>
                </div>

                <p className="experience-introduction">
                    Mes expériences professionnelles m'ont permis d'intervenir sur 
                    différentes étapes du développement d'applications web : conception, 
                    développement Full-Stack, maintenance, automatisation et amélioration 
                    d'interfaces.
                </p>

                <div className="experience-timeline">
                    {experiences.map((experience, index) => (
                        <article className="experience-item" key={`${experience.organization}-${index}`}>
                            <div className="experience-date">
                                {experience.period}
                            </div>

                            <div className="experience-line">
                                <span className="experience-dot"></span>
                            </div>
                            
                            <div className="experience-card">
                                <div className="experience-card-header">
                                    <div>
                                        <h3>{experience.title}</h3>

                                        <p className="experience-company">
                                            {experience.organization}
                                        </p>
                                    </div>
                                </div>

                                <ul className="experience-missions">
                                    {experience.description.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <div className="experience-technologies">
                                    {experience.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;