import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DynamicCardProps = {
  image: string;
  title: string;
  year: string;
  link: string;
};

const DynamicCard = ({ image, title, year, link }: DynamicCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-bl-lg font-bold shadow-lg">
            {year}
          </div>
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-slate-900 dark:text-white text-lg group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4">
          <div className="flex items-center gap-2 text-orange-500 dark:text-orange-400 font-semibold text-sm">
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default DynamicCard;
