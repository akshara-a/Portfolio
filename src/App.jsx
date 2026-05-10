import { useState } from "react";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  const [phase, setPhase] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPhase("results");
    setActiveTab("all");
  };

  const handleNav = (sectionId) => {
    setSearchQuery(`Akshara A. ${sectionId}`);
    setActiveTab(sectionId);
    setPhase("results");
  };

  const handleHome = () => {
    setPhase("home");
    setSearchQuery("");
    setActiveTab("all");
  };

  if (phase === "home") {
    return <HomePage onSearch={handleSearch} onNav={handleNav} />;
  }

  return (
    <ResultsPage
      initialQuery={searchQuery}
      initialTab={activeTab}
      onHome={handleHome}
    />
  );
}
