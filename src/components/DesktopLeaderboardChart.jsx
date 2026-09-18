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

const ModelTick = ({ x, y, payload }) => (
  <g transform={`translate(${x}, ${y})`}>
    <text
      transform="rotate(-40)"
      textAnchor="end"
      fontSize={15}
      fill="#d3d3d3"
    >
      <tspan x={0} dy={12}>
        {String(payload.value)}
      </tspan>
    </text>
  </g>
);

function DesktopLeaderboardChart({ data }) {
  return (
    <div className="desktop-chart-scroll">
      <div className="desktop-chart-inner">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 20,
              left: 40,
              bottom: 8,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="model"
              interval={0}
              height={129}
              tick={<ModelTick />}
            />

            <YAxis domain={[0, 3]} />

            <Tooltip content={<PopupChartTooltips />} />

            <ReferenceLine
              y={2.62}
              stroke="#e8e6e6"
              strokeDasharray="8 8"
              label={{
                value: "Maximum achievable score (lower bound)",
                position: "insideTopRight",
              }}
            />

            <Bar dataKey="score">
              {data.map((entry) => (
                <Cell
                  key={entry.model}
                  fill={getBarColor(entry.vendor)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DesktopLeaderboardChart;