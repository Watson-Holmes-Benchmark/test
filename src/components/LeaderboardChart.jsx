import { useEffect, useState } from "react";
import leaderboard from "../data/leaderboardData.json";
import DesktopLeaderboardChart from "./DesktopLeaderboardChart";
import MobileLeaderboardChart from "./MobileLeaderboardChart";

function LeaderboardChart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sortedData = [...leaderboard].sort(
    (a, b) => Number(a.rank) - Number(b.rank),
  );

  return isMobile ? (
    <MobileLeaderboardChart data={sortedData} />
  ) : (
    <DesktopLeaderboardChart data={sortedData} />
  );
}

export default LeaderboardChart;