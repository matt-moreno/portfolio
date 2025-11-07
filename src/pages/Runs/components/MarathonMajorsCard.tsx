import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marathonMajors } from "../constants";

const MarathonMajorsCard = () => {
  const marathonStars = marathonMajors.map((marathon, index) => (
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
      {marathon.completed && (
        <p className="text-xs text-green-400 text-center">{marathon.time}</p>
      )}
    </div>
  ));

  return (
    <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 flex-1 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-900 dark:text-white text-lg flex items-center gap-2 justify-center">
          🏃‍♂️ Marathon Majors
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="grid grid-cols-3 gap-3">{marathonStars}</div>
      </CardContent>
    </Card>
  );
};

export default MarathonMajorsCard;

