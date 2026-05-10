import ResultCard from "../shared/ResultCard";
import { EDUCATION } from "../../data/portfolioData";

export default function EducationResult() {
  return (
    <ResultCard
      breadcrumb="akshara-a.dev › education"
      title="Education - Akshara A."
    >
      <div className="experience-list">
        {EDUCATION.map((edu) => (
          <div
            key={edu.id}
            className="experience-item"
            style={{ borderLeftColor: edu.color }}
          >
            <div className="experience-role">{edu.degree}</div>

            <div
              className="experience-company"
              style={{ color: edu.color }}
            >
              {edu.institution}
            </div>

            <div className="experience-meta">
              <span>
                <i
                  className="fa-solid fa-university"
                  style={{ marginRight: 4 }}
                />
                {edu.university}
              </span>

              <span>
                <i
                  className="fa-regular fa-calendar"
                  style={{ marginRight: 4 }}
                />
                {edu.duration}
              </span>
            </div>

            <div className="experience-meta" style={{ marginTop: 4 }}>
              <span>
                <i
                  className="fa-solid fa-star"
                  style={{ marginRight: 4, color: "#FBBC05" }}
                />
                {edu.grade}
              </span>
            </div>

            {edu.activities && (
              <div className="edu-section">
                <div className="edu-section-title">
                  <i
                    className="fa-solid fa-users"
                    style={{ marginRight: 6 }}
                  />
                  Activities & Societies
                </div>

                <div className="edu-achievements">
                  {edu.activities.map((activity) => (
                    <span
                      key={activity}
                      className="edu-achievement-tag"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.achievements && (
              <div className="edu-section">
                <div className="edu-section-title">
                  <i
                    className="fa-solid fa-trophy"
                    style={{ marginRight: 6, color: "#FBBC05" }}
                  />
                  Achievements
                </div>

                <div className="edu-achievements">
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="edu-achievement-tag"
                    >
                      <i
                        className="fa-solid fa-award"
                        style={{ marginRight: 4, fontSize: 10 }}
                      />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.responsibilities && (
              <div className="edu-section">
                <div className="edu-section-title">
                  <i
                    className="fa-solid fa-briefcase"
                    style={{ marginRight: 6 }}
                  />
                  Positions of Responsibility
                </div>

                <div className="edu-achievements">
                  {edu.responsibilities.map((responsibility) => (
                    <span
                      key={responsibility}
                      className="edu-achievement-tag"
                    >
                      <i
                        className="fa-solid fa-check"
                        style={{ marginRight: 4, fontSize: 10 }}
                      />
                      {responsibility}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </ResultCard>
  );
}