const PaperLinks = ({ paperUrl, bibtexId, leaderboardId }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="paper-links">
      <a
        href={paperUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="paper-button"
      >
        📄 Paper
      </a>

      <button
        className="paper-button"
        onClick={() => scrollTo(leaderboardId)}
      >
        🏆 Leaderboard
      </button>

      <button
        className="paper-button"
        onClick={() => scrollTo(bibtexId)}
      >
        📚 BibTeX
      </button>
    </div>
  );
};

export default PaperLinks;