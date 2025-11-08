import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marathonMajors } from "../constants";

const MarathonMajorsCard = () => {
  // Split into top 4 and bottom 3
  const topRowMarathons = marathonMajors.slice(0, 4);
  const bottomRowMarathons = marathonMajors.slice(4, 7);

  const renderMarathon = (
    marathon: (typeof marathonMajors)[0],
    index: number
  ) => (
    <div key={index} className="flex flex-col items-center gap-1">
      <span
        className={
          marathon.completed
            ? "text-2xl text-orange-500"
            : "text-2xl text-slate-500"
        }
      >
        ★
      </span>
      <p className="text-xs text-center text-slate-600 dark:text-slate-300">
        {marathon.city}
      </p>
      <p className="text-xs text-center">{marathon.flag}</p>
    </div>
  );

  return (
    <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 flex-1 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-900 dark:text-white text-lg flex items-center gap-2 justify-center">
          🏃‍♂️ Marathon Majors
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="space-y-3">
          {/* Top row - 4 marathons */}
          <div className="grid grid-cols-4 gap-3">
            {topRowMarathons.map((marathon, index) =>
              renderMarathon(marathon, index)
            )}
          </div>
          {/* Bottom row - 3 marathons centered */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-start-2 col-span-3">
              {renderMarathon(bottomRowMarathons[0], 4)}
            </div>
            <div className="col-span-3">
              {renderMarathon(bottomRowMarathons[1], 5)}
            </div>
            <div className="col-span-3">
              {renderMarathon(bottomRowMarathons[2], 6)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarathonMajorsCard;
