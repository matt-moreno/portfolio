import { MapContainer, Popup, TileLayer, Polyline } from "react-leaflet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GeoTypes } from "../RunTypes";

type RouteMapCardProps = {
  geoData: GeoTypes[];
};

const RouteMapCard = ({ geoData }: RouteMapCardProps) => (
  <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 h-full backdrop-blur-sm">
    <CardHeader className="pb-2 flex items-center justify-center">
      <CardTitle className="text-slate-900 dark:text-white text-xl">
        🗺️ Route Map
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <MapContainer
        center={[33.8775, -117.9623]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "480px", width: "100%" }}
        className="rounded-b-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.map((geo) => (
          <Polyline
            key={geo.id}
            positions={geo.polyline}
            pathOptions={{
              color: "#f97316",
              weight: 3,
              opacity: 0.8,
            }}
          >
            <Popup>
              <div className="text-slate-900">
                <h3 className="font-semibold">
                  {geo.exercise}: {geo.title}
                </h3>
                <p className="text-sm">
                  Elevation: {geo.elevLow}m - {geo.elevHigh}m
                </p>
              </div>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>
    </CardContent>
  </Card>
);

export default RouteMapCard;

