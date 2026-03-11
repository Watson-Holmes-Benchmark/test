import { useState } from "react";
import Leaderboard from "./LeaderboardTable";
import LeaderboardChart from "./LeaderboardChart";
import leaderboardData from "../data/leaderboardData"; // your data source

function LeaderboardSection() {
  const [showTable, setShowTable] = useState(true);

  const downloadCSV = () => {
    const headers = Object.keys(leaderboardData[0]).join(",");
    const rows = leaderboardData
      .map((row) => Object.values(row).join(","))
      .join("\n");

    const csv = `${headers}\n${rows}`;

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "leaderboard.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div id="leaderboard-section">
      <div className="leaderboard-header">
        <h2>Benchmark Leaderboard</h2>

        <div>
          <button
            className="paper-button"
            onClick={() => setShowTable(!showTable)}
          >
            {showTable ? "Hide Table ▲" : "Show Table ▼"}
          </button>

          <button className="paper-button" onClick={downloadCSV}>
            Download CSV
          </button>
        </div>
      </div>

      <LeaderboardChart />

      {showTable && <Leaderboard />}
    </div>
  );
}

export default LeaderboardSection;
