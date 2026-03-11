import Cite from "citation-js";

const BibEntry = ({ bibtex }) => {
  const cite = new Cite(bibtex);

  const formatted = cite.format("bibtex");

  return (
    <div className="bib-entry">
      <pre className="bibtex">
        <code>{formatted}</code>
      </pre>
    </div>
  );
};

export default BibEntry;