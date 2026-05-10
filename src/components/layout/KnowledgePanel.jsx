import { PROFILE, NAV_TABS, AWARDS } from "../../data/portfolioData";

export default function KnowledgePanel({ onNav }) {
  const externalLinks = [
    { label: "LinkedIn", href: PROFILE.links.linkedin, icon: "fa-brands fa-linkedin" },
    { label: "GitHub",   href: PROFILE.links.github,   icon: "fa-brands fa-github" },
    { label: "Email",    href: PROFILE.links.email,    icon: "fa-solid fa-envelope" },
    { label: "Book",     href: "https://www.amazon.in/stores/Aksh-A/author/B0GH8M2R2Q/allbooks", icon: "fa-solid fa-book" },
  ];

  return (
    <aside className="knowledge-panel" aria-label="Profile panel">
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div className="kp-avatar">A</div>
        <div className="kp-name">{PROFILE.name}</div>
        <div className="kp-title">{PROFILE.title}</div>
        <div className="kp-location">
          <i className="fa-solid fa-location-dot" style={{ marginRight: 4 }} />
          {PROFILE.location}
        </div>
      </div>

      <div className="kp-badges">
        <span className="kp-badge kp-badge--gold">
          <i className="fa-solid fa-medal" style={{ marginRight: 4 }} />2x Gold Medalist
        </span>
        <span className="kp-badge kp-badge--blue">
          <i className="fa-solid fa-users" style={{ marginRight: 4 }} />2500+ Mentees
        </span>
        <span className="kp-badge kp-badge--green">
          <i className="fa-solid fa-book-open" style={{ marginRight: 4 }} />Published Author
        </span>
      </div>

      <hr className="kp-divider" />
      <p className="kp-bio">{PROFILE.bio}</p>
      <hr className="kp-divider" />

      <div className="kp-links">
        {externalLinks.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="kp-link">
            <i className={l.icon} style={{ width: 16, textAlign: "center" }} />
            {l.label}
          </a>
        ))}
      </div>

      <hr className="kp-divider" />
      <div className="kp-section-label">Top Honors</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
        {AWARDS.slice(0, 3).map((a) => (
          <div key={a.id} style={{ fontSize: 12, color: "#202124", display: "flex", gap: 6, alignItems: "flex-start" }}>
            <i className="fa-solid fa-trophy" style={{ color: "#FBBC05", marginTop: 2, flexShrink: 0 }} />
            <span>{a.title}</span>
          </div>
        ))}
      </div>

      <hr className="kp-divider" />
      <div className="kp-section-label">Quick links</div>
      <nav className="kp-quick-nav">
        {NAV_TABS.filter((t) => t.id !== "all").map((tab) => (
          <button key={tab.id} className="kp-quick-nav-btn" onClick={() => onNav(tab.id)}>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
