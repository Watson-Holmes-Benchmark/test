import leaderboard from "../data/leaderboardData.json"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts"

function LeaderboardChart() {
  const sortedData = [...leaderboard].sort(
    (a, b) => Number(a.rank) - Number(b.rank)
  )

  const getBarColor = (group, model) => {
    if (group === "Human") return "#d3d3d3"
    if (group === "rModel") return "#f08a8a"
    if (group === "cModel") return "#b9d9e8"
    return "#cccccc"
  }

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          margin={{ top: 30, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="model"
            angle={-35}
            textAnchor="end"
            interval={0}
            height={120}
          />
          <YAxis domain={[0, 3]} />
          <Tooltip />
          <Bar dataKey="score">
            {sortedData.map((entry) => (
              <Cell
                key={entry.model}
                fill={getBarColor(entry.group, entry.model)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LeaderboardChart