import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsGraphUpArrow } from "react-icons/bs";

type RunningRecapCardProps = {
  athleteStats: {
    totalRuns: number;
    totalMiles: number;
    ytdRuns: number;
    ytdMiles: number;
  };
  gearName?: string;
};

const stats = (athleteStats: RunningRecapCardProps["athleteStats"], gearName?: string) => [
  { label: "Total Miles (All Time)", value: `${athleteStats.totalMiles} mi` },
  { label: "Total Runs (All Time)", value: athleteStats.totalRuns },
  { label: "Year to Date Miles", value: `${athleteStats.ytdMiles} mi` },
  { label: "Year to Date Runs", value: athleteStats.ytdRuns },
  { label: "Shoes", value: gearName },
];

const RunningRecapCard = ({
  athleteStats,
  gearName,
}: RunningRecapCardProps) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-xl flex items-center gap-2">
        <BsGraphUpArrow className="text-primary" />
        Running Recap
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {stats(athleteStats, gearName).map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between items-center p-3 bg-secondary rounded-lg"
          >
            <span className="text-secondary-foreground">{label}:</span>
            <span className="text-primary font-bold text-lg">{value}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RunningRecapCard;
