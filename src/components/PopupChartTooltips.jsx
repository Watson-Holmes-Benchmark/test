function PopupChartTooltips({ active, payload }) {
  if (!active || !payload?.length) return null

  const entry = payload[0].payload

  return (
    <div className="popup-chart-tooltips">
      <div>{entry.model}</div>
      <div>{entry.score}</div>
    </div>
  )
}

export default PopupChartTooltips;