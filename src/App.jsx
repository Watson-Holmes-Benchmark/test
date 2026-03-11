import PaperLinks from "./components/PaperLinks";
import LeaderboardSection from "./components/LeaderboardSection";
import Contributor from "./components/Contributor";
import BibEntry from "./components/BibEntry";
import bibtext from "./data/bibtext";

import "./App.css";

function App() {
  return (
    <>
      <h1>
        Watson & Holmes: A Naturalistic Benchmark for Comparing Human and LLM
        Reasoning
      </h1>

      <PaperLinks
        paperUrl="https://arxiv.org/abs/2602.19914"
        bibtexId="bibtex-section"
      />

      <div>
        A new benchmark designed to evaluate reasoning performance using
        incrementally presented narrative evidence, open-ended questions and
        unconstrained language responses. This benchmark was adapted from the{" "}
        <a href="https://boardgamegeek.com/boardgame/182694/watson-and-holmes">
          Watson & Holmes detective tabletop game
        </a>
        .
      </div>
      <br />

      <LeaderboardSection />


      <div id="bibtex-section">
        <h2>Bibtext</h2>
        <BibEntry bibtex={bibtext} />
        <Contributor />
      </div>
    </>
  );
}

export default App;
