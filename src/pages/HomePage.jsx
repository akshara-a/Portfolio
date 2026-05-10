import { useState } from "react";
import GoogleLogo from "../components/shared/GoogleLogo";
import SearchBar from "../components/shared/SearchBar";
import { SEARCH_SUGGESTIONS, NAV_TABS } from "../data/portfolioData";

export default function HomePage({ onSearch, onNav }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [showSugg, setShowSugg] = useState(false);

  const handleSearch = (q) => {
    if (q.trim()) onSearch(q);
  };

  return (
    <div className="home-page">
      <div className="home-center">
        <GoogleLogo scale={1.4} />

        <p className="home-subtitle">
          Akshara A. &nbsp;·&nbsp; Software Engineer &nbsp;·&nbsp; Portfolio
        </p>

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          focused={focused}
          setFocused={setFocused}
          showSugg={showSugg}
          setShowSugg={setShowSugg}
          suggestions={SEARCH_SUGGESTIONS}
        />

        <div className="home-buttons">
          <button
            className="google-btn"
            onClick={() => handleSearch(query || "Akshara A")}
          >
            <i className="fa-brands fa-google" style={{ marginRight: 6 }} />
            Google Search
          </button>
          <button
            className="google-btn"
            onClick={() => handleSearch("Akshara A projects")}
          >
            <i className="fa-solid fa-shuffle" style={{ marginRight: 6 }} />
            I'm Feeling Lucky
          </button>
        </div>

        <div className="home-quick-links">
          {NAV_TABS.filter((t) => t.id !== "all").map((tab) => (
            <button
              key={tab.id}
              className="quick-link-btn"
              onClick={() => onNav(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
