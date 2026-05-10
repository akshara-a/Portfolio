import ResultCard from "../shared/ResultCard";
import { AWARDS } from "../../data/portfolioData";

const MEDAL_COLORS = ["#FBBC05", "#EA4335", "#4285F4", "#34A853", "#FF6D00", "#9C27B0"];

export default function AwardsResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › awards" title="Honors & Awards — Akshara A.">
      <div className="awards-list">
        {AWARDS.map((award, i) => {
          const color = MEDAL_COLORS[i % MEDAL_COLORS.length];
          return (
            <div key={award.id} className="award-item">
              <div className="award-medal" style={{ background: color }}>
                <i className="fa-solid fa-award" style={{ color: "#fff", fontSize: 16 }} />
              </div>
              <div className="award-info">
                <div className="award-title">{award.title}</div>
                <div className="award-issuer">
                  <i className="fa-solid fa-building-columns" style={{ marginRight: 4, color }} />
                  {award.issuer}
                </div>
                <div className="award-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 4 }} />
                  {award.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ResultCard>
  );
}
