import ResultCard from "../shared/ResultCard";
import { PROJECTS } from "../../data/portfolioData";

export default function ProjectsResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › projects" title="Projects by Akshara A.">
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <div className="project-url">{project.url}</div>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noreferrer"
              className="project-title"
            >
              {project.title}
            </a>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag" style={{ borderColor: project.color, color: project.color }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ResultCard>
  );
}
