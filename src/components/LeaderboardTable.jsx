import leaderboardData from "../data/leaderboardData.json";

function Leaderboard() {
  return (
    <div className="Leaderboard" >
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Model name</th>
            <th>Overall score</th>
          </tr>
        </thead>

        <tbody>
          {[...leaderboardData]
            .sort((a, b) => a.rank - b.rank)
            .map((row) => (
              <tr key={row.model}>
                <td>{row.rank}</td>
                <td>{row.model}</td>
                <td>{row.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
