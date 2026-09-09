import { useState } from "react";

function RecommendModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelName, setModelName] = useState("");
  const [modelUrl, setModelUrl] = useState("");

  const contactEmail = "thatchawin.leelawat.19@ucl.ac.uk";

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Model recommendation: ${modelName}`
    );

    const body = encodeURIComponent(
      `Model name: ${modelName}\nModel URL: ${modelUrl}`
    );

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="ask-4-model">
      <button
        className="recommend-button"
        onClick={() => setIsOpen(true)}
      >
        Recommend a model for benchmarking
      </button>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <h2>Recommend a model</h2>

            <p>
              Suggest a model that you would like to see evaluated on the
              Watson & Holmes benchmark.
            </p>

            <form onSubmit={handleSubmit}>
              <label>
                Model name
                <input
                  type="text"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  placeholder="e.g. Gemini 2.5 Pro"
                  required
                />
              </label>

              <label>
                Model URL
                <input
                  type="url"
                  value={modelUrl}
                  onChange={(e) => setModelUrl(e.target.value)}
                  placeholder="https://..."
                  required
                />
              </label>

              <button type="submit">
                Send recommendation
              </button>
            </form>

            <p className="contact">
              Contact:{" "}
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendModel;