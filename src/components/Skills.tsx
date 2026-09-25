import { skillCategories } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-number">02.</span>
                    <h2>Mes compétences</h2>
                </div>

                <p className="skills-introduction">
                    Les technologies et les outils que j'utilise pour concevoir 
                    des applications web complètes.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <article className="skill-card" key={category.title}>
                            <h3>{category.title}</h3>
                            
                            <div className="skill-list">
                                {category.skills.map((skill) => (
                                    <span className="skill" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;