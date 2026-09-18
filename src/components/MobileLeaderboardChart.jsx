import PopupChartTooltips from "./PopupChartTooltips";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
} from "recharts";

function MobileLeaderboardChart({ data }) {
  const vendorColors = {
    OpenAI: "#8ec5a4",
    Google: "#9eb9e5",
    Anthropic: "#e6b17e",
    other: "#cccccc",
  };

  const getBarColor = (vendor) => {
    if (vendor === "Human") return "#d3d3d3";

    return vendorColors[vendor] || vendorColors.other;
  };

  return (
    <div
      style={{
        width: "100%",
        height: Math.max(400, data.length * 52),
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" domain={[0, 3]} />

          <YAxis
            type="category"
            dataKey="model"
            width={100}
            tick={{ fontSize: 15 }}
            tickFormatter={name}
          />

          <Tooltip content={<PopupChartTooltips />} />

          <ReferenceLine x={2.62} stroke="#e8e6e6" strokeDasharray="8 8" />

          <Bar dataKey="score">
            {data.map((entry) => (
              <Cell key={entry.model} fill={getBarColor(entry.vendor)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MobileLeaderboardChart;
