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

  const vendorColors = { OpenAI: "#8ec5a4", Google: "#9eb9e5", Anthropic: "#e6b17e", other: "#cccccc", } 
  const getBarColor = (vendor) => { 
    if (vendor === "Human") return "#d3d3d3" 
    
    return vendorColors[vendor] || vendorColors.other}

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

        <ReferenceLine
          y={2.62}
          stroke="#666"
          strokeDasharray="4 4"
          label={{
            value: "Max achievable score (lower bound) = 2.62",
            position: "insideTopRight",
          }}
        />

        <Bar dataKey="score">
          {sortedData.map((entry) => (
            <Cell
              key={entry.model}
              fill={getBarColor(entry.vendor)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
)}

export default LeaderboardChart