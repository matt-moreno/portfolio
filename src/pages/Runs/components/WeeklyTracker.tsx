import { Card } from "@/components/ui/card";

const WeeklyTracker = ({
  currentWeekMiles,
  dayProgress,
}: {
  currentWeekMiles: number;
  dayProgress: number[];
}) => {
  const weeklyGoal = 20;
  const progressPercentage = (currentWeekMiles / weeklyGoal) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Card className="border-orange-500 bg-white/80 dark:bg-slate-800 border-2 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-orange-500 text-lg font-semibold">📊</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-semibold">
          Weekly goal: {weeklyGoal} mi
        </h3>
        <span className="text-orange-400 text-sm">🔥</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 xl:gap-12">
        <div className="relative w-32 h-32 md:w-36 md:h-36 xl:w-40 xl:h-40">
          <svg
            className="w-32 h-32 md:w-36 md:h-36 xl:w-40 xl:h-40 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(51, 65, 85)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(34, 197, 94)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold">
              {currentWeekMiles.toFixed(1)}
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              mi
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-2 md:gap-3">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 md:gap-2"
              >
                <div
                  className={`w-2.5 h-10 md:w-3 md:h-12 rounded-full ${
                    dayProgress[index]
                      ? "bg-green-500"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                />
                <span className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeeklyTracker;
