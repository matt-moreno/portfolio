import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsTrophy } from "react-icons/bs";
import { marathonMajors } from "../constants";

const MarathonMajorsCard = () => {
  // Split into top 4 and bottom 4
  const topRowMarathons = marathonMajors.slice(0, 4);
  const bottomRowMarathons = marathonMajors.slice(4, 8);

  const renderMarathon = (
    marathon: (typeof marathonMajors)[0],
    index: number
  ) => (
    <div key={index} className="flex flex-col items-center gap-1">
      <span
        className={`text-2xl ${
          marathon.completed ? "text-primary" : "text-muted-foreground/60"
        }`}
      >
        ★
      </span>
      <p className="text-xs text-center text-muted-foreground">
        {marathon.city}
      </p>
      <p className="text-xs text-center">{marathon.flag}</p>
    </div>
  );

  return (
    <Card className="flex-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2 justify-center">
          <BsTrophy className="text-primary" />
          Marathon Majors
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
          {/* Bottom row - 4 marathons */}
          <div className="grid grid-cols-4 gap-3">
            {bottomRowMarathons.map((marathon, index) =>
              renderMarathon(marathon, index + 4)
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarathonMajorsCard;
