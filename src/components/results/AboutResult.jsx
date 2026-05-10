import ResultCard from "../shared/ResultCard";
import { PROFILE } from "../../data/portfolioData";

export default function AboutResult() {
  const infoFields = [
    { label: "Education",  icon: "fa-solid fa-graduation-cap", value: PROFILE.education },
    { label: "Location",   icon: "fa-solid fa-location-dot",   value: PROFILE.location },
    { label: "Status",     icon: "fa-solid fa-briefcase",       value: PROFILE.status },
    { label: "Languages",  icon: "fa-solid fa-language",        value: PROFILE.languages },
  ];

  return (
    <ResultCard
      breadcrumb="linkedin.com › in › akshara-a"
      title="Akshara A. – Software Developer & Mentor | LinkedIn"
      titleHref={PROFILE.links.linkedin}
    >
      <p className="result-snippet">{PROFILE.bio}</p>
      <div className="about-info-grid">
        {infoFields.map((f) => (
          <div key={f.label} className="about-info-item">
            <label>
              <i className={f.icon} style={{ marginRight: 5 }} />
              {f.label}
            </label>
            <span>{f.value}</span>
          </div>
        ))}
      </div>

      <div className="about-highlights">
        {[
          { icon: "fa-solid fa-users", val: "2,500+", label: "Mentees" },
          { icon: "fa-solid fa-medal", val: "2x", label: "Gold Medalist" },
          { icon: "fa-solid fa-book-open", val: "Published", label: "Author" },
          { icon: "fa-solid fa-code", val: "2 yrs", label: "Full-time Experience" },
        ].map((h) => (
          <div key={h.label} className="about-highlight-card">
            <i className={h.icon} style={{ color: "#4285F4", fontSize: 18, marginBottom: 4 }} />
            <strong>{h.val}</strong>
            <span>{h.label}</span>
          </div>
        ))}
      </div>
    </ResultCard>
  );
}
