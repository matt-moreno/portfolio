import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RunningRecapCardProps = {
  athleteStats: {
    totalRuns: number;
    totalMiles: number;
    ytdRuns: number;
    ytdMiles: number;
  };
  gearName?: string;
};

const RunningRecapCard = ({
  athleteStats,
  gearName,
}: RunningRecapCardProps) => (
  <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 backdrop-blur-sm">
    <CardHeader className="pb-3">
      <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
        📈 Running Recap
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
          <span className="text-slate-700 dark:text-slate-300">
            Total Miles (All Time):
          </span>
          <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
            {athleteStats.totalMiles} mi
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
          <span className="text-slate-700 dark:text-slate-300">
            Total Runs (All Time):
          </span>
          <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
            {athleteStats.totalRuns}
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
          <span className="text-slate-700 dark:text-slate-300">
            Year to Date Miles:
          </span>
          <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
            {athleteStats.ytdMiles} mi
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
          <span className="text-slate-700 dark:text-slate-300">
            Year to Date Runs:
          </span>
          <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
            {athleteStats.ytdRuns}
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
          <span className="text-slate-700 dark:text-slate-300">Shoes:</span>
          <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
            {gearName}
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default RunningRecapCard;

