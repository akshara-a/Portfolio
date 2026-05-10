import ResultCard from "../shared/ResultCard";
import { CERTIFICATIONS } from "../../data/portfolioData";

const ISSUER_COLORS = {
  "LinkedIn": "#0A66C2",
  "JPMorganChase": "#003087",
  "Accenture": "#A100FF",
  "HackerRank": "#00EA64",
  "Cognizant": "#1261AB",
  "Align Technology": "#E87722",
};

export default function CertificationsResult() {
  return (
    <ResultCard breadcrumb="akshara-a.dev › certifications" title="Licenses & Certifications - Akshara A.">
      <div className="cert-grid">
        {CERTIFICATIONS.map((cert) => {
          const color = ISSUER_COLORS[cert.issuer] || "#4285F4";
          return (
            <div key={cert.id} className="cert-card">
              <div className="cert-icon" style={{ background: color }}>
                <i className="fa-solid fa-certificate" style={{ color: "#fff", fontSize: 16 }} />
              </div>
              <div className="cert-info">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer" style={{ color }}>
                  <i className="fa-solid fa-building" style={{ marginRight: 4, fontSize: 11 }} />
                  {cert.issuer}
                </div>
                <div className="cert-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 4 }} />
                  {cert.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ResultCard>
  );
}
