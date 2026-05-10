import ResultCard from "../shared/ResultCard";
import { SKILLS } from "../../data/portfolioData";

export default function SkillsResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › skills" title="Skills & Technologies — Akshara A.">
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skill-category-card">
            <div className="skill-category-header" style={{ color: group.color }}>
              <i className={group.icon} />
              {group.category}
            </div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ResultCard>
  );
}
