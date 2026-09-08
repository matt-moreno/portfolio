import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsLightningCharge, BsRulers, BsSpeedometer2, BsClock, BsCalendar3, BsHeart } from "react-icons/bs";
import { RecentActivityTypes } from "../RunTypes";

type RecentActivityCardProps = {
  recentActivity: RecentActivityTypes[];
};

const RecentActivityCard = ({ recentActivity }: RecentActivityCardProps) => (
  <Card className="lg:col-span-2">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl flex items-center gap-2">
        <BsLightningCharge className="text-primary" />
        Recent Activity
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="rounded-xl p-3 bg-secondary/60 border border-border"
          >
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-around gap-2 items-center">
              <div className="flex items-center gap-2 bg-card px-2.5 py-1.5 rounded-lg border border-border">
                <BsRulers className="text-primary text-sm" />
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-none">
                    {activity.distance}
                  </span>
                  <span className="text-muted-foreground text-xs">miles</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-card px-2.5 py-1.5 rounded-lg border border-border">
                <BsSpeedometer2 className="text-primary text-sm" />
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-none">
                    {activity.pace}
                  </span>
                  <span className="text-muted-foreground text-xs">/mi</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-card px-2.5 py-1.5 rounded-lg border border-border">
                <BsClock className="text-primary text-sm" />
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-none">
                    {activity.time}
                  </span>
                  <span className="text-muted-foreground text-xs">total</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-card px-2.5 py-1.5 rounded-lg border border-border">
                <BsCalendar3 className="text-primary text-sm" />
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-none">
                    {activity.date}
                  </span>
                  <span className="text-muted-foreground text-xs">date</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg col-span-2 md:col-span-1 ${
                  activity.heartRate
                    ? "bg-red-500/10 text-red-600 dark:text-red-400"
                    : "bg-card border border-border text-muted-foreground"
                }`}
              >
                <BsHeart className="text-sm" />
                <div className="flex flex-col">
                  <span className="font-bold text-base leading-none">
                    {activity.heartRate || "--"}
                  </span>
                  <span className="text-xs opacity-80">bpm</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RecentActivityCard;
