import GoogleLogo from "../shared/GoogleLogo";
import SearchBar from "../shared/SearchBar";
import { NAV_TABS, SEARCH_SUGGESTIONS } from "../../data/portfolioData";

export default function ResultsHeader({
  query, setQuery, onSearch,
  focused, setFocused, showSugg, setShowSugg,
  activeTab, setActiveTab, onHome,
}) {
  return (
    <header className="results-header">
      <div className="results-header-inner">
        <GoogleLogo scale={0.7} onClick={onHome} />
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={onSearch}
          focused={focused}
          setFocused={setFocused}
          showSugg={showSugg}
          setShowSugg={setShowSugg}
          suggestions={SEARCH_SUGGESTIONS}
        />
        <div className="header-actions">
          <button className="header-link-btn">
            <i className="fa-solid fa-gear" />
          </button>
          <button className="header-link-btn">
            <i className="fa-solid fa-grip" />
          </button>
          <button className="header-sign-in">
            <i className="fa-solid fa-user" style={{ marginRight: 6 }} />
            Sign in
          </button>
        </div>
      </div>
      <nav className="tab-nav" aria-label="Search categories">
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
