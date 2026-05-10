export default function ResultCard({ breadcrumb, title, titleHref, children }) {
  return (
    <div className="result-card">
      {breadcrumb && <div className="result-breadcrumb">{breadcrumb}</div>}
      {title && (
        titleHref ? (
          <a
            href={titleHref}
            target="_blank"
            rel="noreferrer"
            className="result-title"
          >
            {title}
          </a>
        ) : (
          <div className="result-title" style={{ cursor: "default" }}>
            {title}
          </div>
        )
      )}
      {children}
    </div>
  );
}
