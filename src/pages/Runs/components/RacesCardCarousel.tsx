import DynamicCard from "../../../components/DynamicCard/DynamicCard";
import { races } from "../constants";
export default function RacesCardCarousel() {
  const raceCards = races.map((race) => (
    <DynamicCard key={race.title} {...race} />
  ));

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {raceCards}
      </div>
    </div>
  );
}
