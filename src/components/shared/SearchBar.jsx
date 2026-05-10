import { useRef } from "react";
import { InputText } from "primereact/inputtext";

export default function SearchBar({
  query,
  setQuery,
  onSearch,
  focused,
  setFocused,
  showSugg,
  setShowSugg,
  suggestions = [],
}) {
  const inputRef = useRef(null);

  const filteredSuggestions = query
    ? suggestions
        .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : [];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
      setShowSugg(false);
    }
  };

  const handleSuggestionClick = (s) => {
    setQuery(s);
    onSearch(s);
    setShowSugg(false);
  };

  return (
    <div className="search-wrapper">
      <div
        className={[
          "search-box",
          focused ? "focused" : "",
          showSugg && filteredSuggestions.length > 0 ? "with-dropdown" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => inputRef.current?.focus()}
      >
        <i className="fa-solid fa-magnifying-glass" style={{ color: "#9aa0a6", fontSize: 16 }} />

        <InputText
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSugg(true);
          }}
          onFocus={() => {
            setFocused(true);
            setShowSugg(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setFocused(false);
              setShowSugg(false);
            }, 150);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search Akshara's portfolio..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            boxShadow: "none",
            fontSize: 16,
            fontFamily: "Arial, sans-serif",
            color: "#202124",
            background: "transparent",
            padding: 0,
          }}
          unstyled
        />

        {query && (
          <button
            className="search-clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              setQuery("");
            }}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        )}

        <div className="search-divider" />

        <button className="search-voice-btn">
          <i className="fa-solid fa-microphone" />
        </button>
      </div>

      {showSugg && filteredSuggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {filteredSuggestions.map((s, i) => (
            <div
              key={i}
              className="suggestion-item"
              onMouseDown={() => handleSuggestionClick(s)}
            >
              <i className="fa-solid fa-magnifying-glass" style={{ color: "#9aa0a6", fontSize: 14 }} />
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
