import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RaceCardProps = {
  image: string;
  title: string;
  year: string;
  link: string;
  pace: string;
  time: string;
  stravaId?: number;
};

const RaceCard = ({ image, title, year, link, pace, time, stravaId }: RaceCardProps) => {
  const cardContent = (
    <Card className="overflow-hidden h-full hover:border-primary/40 transition-colors">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-background/90 border border-border text-foreground px-2.5 py-1 rounded-full text-xs font-semibold">
          {year}
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="flex flex-row gap-8 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Avg Pace</span>
            <span className="font-semibold text-foreground">{pace}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Finish Time</span>
            <span className="font-semibold text-foreground">{time}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          <span>View Details</span>
          <BsArrowRight className="transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );

  if (stravaId) {
    return (
      <Link to={`/runs/${stravaId}`} className="block group">
        {cardContent}
      </Link>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      {cardContent}
    </a>
  );
};

export default RaceCard;
