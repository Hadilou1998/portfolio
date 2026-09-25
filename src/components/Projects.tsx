import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-number">03.</span>
                    <h2>Mes projets</h2>
                </div>

                <p className="projects-introduction">
                    Une selection de projets sur lesquels j'ai travaillé afin de 
                    développer mes compétences en conception d'application web 
                    Front-End et Back-End.
                </p>

                <div className="projects-list">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;