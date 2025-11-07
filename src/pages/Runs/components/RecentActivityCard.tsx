import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentActivityTypes } from "../RunTypes";

type RecentActivityCardProps = {
  recentActivity: RecentActivityTypes[];
};

const RecentActivityCard = ({ recentActivity }: RecentActivityCardProps) => (
  <Card className="lg:col-span-2 border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 backdrop-blur-sm">
    <CardHeader className="pb-3">
      <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
        ⚡ Recent Activity
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="group bg-gradient-to-r from-orange-300/30 to-orange-500/30 dark:from-orange-700/30 dark:to-orange-800/30 rounded-xl p-1.5 border border-orange-400/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-2 md:justify-around gap-2 items-center">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                <span className="text-orange-500 text-sm">📏</span>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                    {activity.distance}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    miles
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                <span className="text-orange-500 text-sm">⏱️</span>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                    {activity.pace}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    /mi
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                <span className="text-orange-500 text-sm">🕐</span>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                    {activity.time}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    total
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                <span className="text-orange-500 text-sm">📅</span>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                    {activity.date}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    date
                  </span>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 px-2 py-0.5 rounded-lg shadow-sm md:hidden ${
                  activity.heartRate
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
                }`}
              >
                <span className="text-base">
                  {activity.heartRate ? "❤️" : "💤"}
                </span>
                <div className="flex flex-col">
                  <span
                    className={`font-bold text-base leading-none ${
                      activity.heartRate
                        ? "text-white"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {activity.heartRate || "--"}
                  </span>
                  <span
                    className={`text-xs ${
                      activity.heartRate
                        ? "text-red-100"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    bpm
                  </span>
                </div>
              </div>

              {activity.heartRate && (
                <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-0.5 rounded-lg shadow-sm">
                  <span className="text-base">❤️</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-base leading-none">
                      {activity.heartRate}
                    </span>
                    <span className="text-red-100 text-xs">bpm</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RecentActivityCard;

