import { Link } from "react-router";

function ProjectCard({ project, onViewArchitecture }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          className="project-card-image"
          src={project.image}
          alt={project.imageAlt}
        />
      </div>

      <div className="project-card-body">
        <p className="project-category">{project.category}</p>

        <h2>{project.title}</h2>

        <p className="project-description">{project.description}</p>

        <ul
          className="project-tech-list"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li className="project-tech-item" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="project-card-actions">
          <Link
            className="primary-button project-action-button"
            to={project.caseStudyPath}
          >
            Read Case Study
          </Link>

          {project.architecture && onViewArchitecture && (
            <button
              type="button"
              className="secondary-button project-action-button"
              onClick={() => onViewArchitecture(project)}
            >
              View Pipeline →
            </button>
          )}

          {project.githubUrl && (
            <a
              className="secondary-button project-action-button"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              className="secondary-button project-action-button"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;