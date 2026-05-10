export default function ResultsFooter() {
  return (
    <footer className="results-footer">
      <span>
        <i className="fa-solid fa-earth-asia" style={{ marginRight: 6 }} />
        India
      </span>
      <div className="footer-links">
        {["Privacy", "Terms", "Settings", "Help"].map((label) => (
          <span key={label} className="footer-link">{label}</span>
        ))}
      </div>
    </footer>
  );
}
