import ResultCard from "../shared/ResultCard";
import { EXPERIENCE } from "../../data/portfolioData";

export default function ExperienceResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › experience" title="Experience -  Akshara A.">
      <div className="experience-list">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="experience-item" style={{ borderLeftColor: exp.color }}>
            <div className="experience-role">{exp.role}</div>
            <div className="experience-company" style={{ color: exp.color }}>
              {exp.company}
              <span className="experience-badge">{exp.type}</span>
            </div>
            <div className="experience-meta">
              <span><i className="fa-regular fa-clock" style={{ marginRight: 4 }} />{exp.duration}</span>
              <span><i className="fa-solid fa-location-dot" style={{ marginRight: 4 }} />{exp.location}</span>
            </div>
            <p className="experience-desc">{exp.description}</p>
            {exp.tags && (
              <div className="project-tags" style={{ marginTop: 6 }}>
                {exp.tags.map((t) => (
                  <span key={t} className="project-tag" style={{ borderColor: exp.color, color: exp.color }}>{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ResultCard>
  );
}
