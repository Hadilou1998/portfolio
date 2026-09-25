import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-image">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="project-placeholder">
                        <span>Projet Full-Stack</span>
                    </div>
                )}
            </div>

            <div className="project-content">
                <span className="project-label">Projet</span>

                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-features">
                    <h4>Fonctionnalités</h4>

                    <ul>
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-actions">
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="project-link"
                        >
                            <i className="icon-github"></i>
                        </a>
                    )}

                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="project-link"
                        >
                            <i className="icon-demo"></i>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;