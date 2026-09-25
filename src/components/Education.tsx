type EducationItem = {
    title: string;
    school: string;
    location: string;
    period?: string;
    highlight?: string;
};

const educationItems: EducationItem[] = [
    {
        title: "Expert en architecture et développement logiciel",
        school: "Ecole 301xPMN",
        location: "Paris La Défense (92)",
        highlight: "Master • Option Lead Développeur Full-Stack",
    },

    {
        title: "Concepteur Développeur d'Applications",
        school: "CFA Prépavenir",
        location: "Franconville (95)",
        period: "2024 - 2025",
    },

    {
        title: "Piscine Architecte",
        school: "ETNA (Etablissement de Technologies Numériques Avancées)",
        location: "Ivry-sur-Seine (94)",
        period: "2022 - 2023",
    },

    {
        title: "Métier de l'Informatique",
        school: "IUT Vélizy",
        location: "Vélizy-Villacoublay (78)",
        period: "2020 - 2022",
        highlight: "Licence pro • Option Application&Data",
    },

    {
        title: "Services Informatiques aux Organisations",
        school: "ICOGES",
        location: "Paris (75)",
        period: "2018 - 2020",
        highlight: "BTS • Option Solutions Logicielles et Applications Métiers",
    },
];

function Education() {
    return (
        <section id="education" className="section education">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-number">05.</span>
                    <h2>Formation</h2>
                </div>

                <p className="education-introduction">
                    Mon parcours de formation m'a permis d'acquérir progressivement
                    des compétences en développement, conception d'applications
                    et architecture logicielle.
                </p>

                <div className="education-grid">
                    {educationItems.map((education) => (
                        <article className="education-card" key={`${education.title}-${education.school}`}>
                            <div className="education-top">
                                {education.period && (
                                    <span className="education-period">
                                        {education.period}
                                    </span>
                                )}

                                {education.highlight && (
                                    <span className="education-highlight">
                                        {education.highlight}
                                    </span>
                                )}
                            </div>

                            <h3>{education.title}</h3>

                            <p className="education-school">
                                {education.school}
                            </p>

                            <p className="education-location">
                                {education.location}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;