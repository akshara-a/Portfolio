import ResultCard from "../shared/ResultCard";
import { VOLUNTEERING } from "../../data/portfolioData";

const CAUSE_COLORS = {
  "Education": "#4285F4",
  "Environment": "#34A853",
  "Arts & Culture": "#FBBC05",
  "Social Services": "#EA4335",
  "Animal Welfare": "#FF6D00",
};

const CAUSE_ICONS = {
  "Education": "fa-solid fa-book",
  "Environment": "fa-solid fa-leaf",
  "Arts & Culture": "fa-solid fa-palette",
  "Social Services": "fa-solid fa-heart",
  "Animal Welfare": "fa-solid fa-paw",
};

export default function VolunteeringResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › volunteering" title="Volunteering — Akshara A.">
      <div className="experience-list">
        {VOLUNTEERING.map((v) => {
          const color = CAUSE_COLORS[v.cause] || "#4285F4";
          const icon = CAUSE_ICONS[v.cause] || "fa-solid fa-hands-helping";
          return (
            <div key={v.id} className="experience-item" style={{ borderLeftColor: color }}>
              <div className="experience-role">{v.role}</div>
              <div className="experience-company" style={{ color }}>{v.org}</div>
              <div className="experience-meta">
                <span><i className="fa-regular fa-clock" style={{ marginRight: 4 }} />{v.duration}</span>
                <span>
                  <i className={icon} style={{ marginRight: 4, color }} />
                  {v.cause}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </ResultCard>
  );
}
