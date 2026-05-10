import { useState } from "react";
import ResultsHeader from "../components/layout/ResultsHeader";
import KnowledgePanel from "../components/layout/KnowledgePanel";
import ResultsFooter from "../components/layout/ResultsFooter";
import AboutResult from "../components/results/AboutResult";
import ExperienceResult from "../components/results/ExperienceResult";
import ProjectsResult from "../components/results/ProjectsResult";
import SkillsResult from "../components/results/SkillsResult";
import EducationResult from "../components/results/EducationResult";
import CertificationsResult from "../components/results/CertificationsResult";
import VolunteeringResult from "../components/results/VolunteeringResult";
import AwardsResult from "../components/results/AwardsResult";

const ALL_SECTIONS = [
  "about", "experience", "projects", "skills",
  "education", "certifications", "volunteering", "awards"
];

const SECTION_COMPONENTS = {
  about:          AboutResult,
  experience:     ExperienceResult,
  projects:       ProjectsResult,
  skills:         SkillsResult,
  education:      EducationResult,
  certifications: CertificationsResult,
  volunteering:   VolunteeringResult,
  awards:         AwardsResult,
};

export default function ResultsPage({ initialQuery, initialTab = "all", onHome }) {
  const [query, setQuery]       = useState(initialQuery || "");
  const [activeTab, setActiveTab] = useState(initialTab);
  const [focused, setFocused]   = useState(false);
  const [showSugg, setShowSugg] = useState(false);

  const handleSearch = (q) => { setQuery(q); setActiveTab("all"); };
  const handleNav    = (id) => { setActiveTab(id); setQuery(`Akshara A. ${id}`); };

  const visibleSections = activeTab === "all" ? ALL_SECTIONS : [activeTab];

  return (
    <div className="results-page">
      <ResultsHeader
        query={query}        setQuery={setQuery}
        onSearch={handleSearch}
        focused={focused}    setFocused={setFocused}
        showSugg={showSugg}  setShowSugg={setShowSugg}
        activeTab={activeTab} setActiveTab={setActiveTab}
        onHome={onHome}
      />
      <div className="results-body">
        <main className="results-main">
          <p className="result-count">
            About {visibleSections.length * 3} results (0.42 seconds)
          </p>
          {visibleSections.map((id) => {
            const Component = SECTION_COMPONENTS[id];
            return Component ? <Component key={id} onNav={handleNav} /> : null;
          })}
        </main>
        <KnowledgePanel onNav={handleNav} />
      </div>
      <ResultsFooter />
    </div>
  );
}
