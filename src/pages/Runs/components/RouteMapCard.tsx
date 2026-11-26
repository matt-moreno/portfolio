import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Map, { Source, Layer, Popup, NavigationControl } from "react-map-gl/mapbox";
import type { LayerProps, MapRef } from "react-map-gl/mapbox";
import type { MapMouseEvent } from "mapbox-gl";
import type { FeatureCollection } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import { GeoTypes } from "../RunTypes";

type RouteMapCardProps = { geoData: GeoTypes[] };

type PopupInfo = {
  longitude: number;
  latitude: number;
  exercise: string;
  title: string;
  elevLow: number;
  elevHigh: number;
};

const LAYER_ID = "routes-layer";

const routeLayer: LayerProps = {
  id: LAYER_ID,
  type: "line",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#7fbd9e" /* --primary sage, reads on the dark basemap */, "line-width": 3, "line-opacity": 0.8 },
};

type Bounds = [[number, number], [number, number]];

// [lat, lng][] -> [[minLng, minLat], [maxLng, maxLat]]
const routeBounds = (route: [number, number][]): Bounds => {
  const lats = route.map(([lat]) => lat);
  const lngs = route.map(([, lng]) => lng);
  return [
    [Math.min(...lngs), Math.min(...lats)],
    [Math.max(...lngs), Math.max(...lats)],
  ];
};

const FIT_PADDING = 48;

const RouteMapCard = ({ geoData }: RouteMapCardProps) => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const mapRef = useRef<MapRef>(null);

  // Races are spread across cities, so the map frames one race at a time,
  // newest first; the chips below switch between them.
  const races = useMemo(
    () =>
      geoData
        .filter((geo) => geo.polyline.length > 0)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [geoData],
  );
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const activeId = selectedId ?? races[0]?.id;

  // The map instance and the race routes both load asynchronously, in either
  // order: frame the newest race once both are ready
  const [mapReady, setMapReady] = useState(false);
  const firstRace = races[0];
  useEffect(() => {
    if (!mapReady || !firstRace || selectedId !== null) return;
    mapRef.current?.fitBounds(routeBounds(firstRace.polyline), {
      padding: FIT_PADDING,
      duration: 0,
    });
  }, [mapReady, firstRace, selectedId]);

  const selectRace = (id: number) => {
    const race = races.find((r) => r.id === id);
    if (!race) return;
    setSelectedId(id);
    setPopupInfo(null);
    mapRef.current?.fitBounds(routeBounds(race.polyline), {
      padding: FIT_PADDING,
      duration: 1500,
    });
  };

  // geo.polyline is [lat, lng][] (from @mapbox/polyline.decode) — GeoJSON needs [lng, lat][]
  const geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: geoData.map((geo) => ({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: geo.polyline.map(([lat, lng]) => [lng, lat]),
      },
      properties: {
        id: geo.id,
        title: geo.title,
        exercise: geo.exercise,
        elevHigh: geo.elevHigh,
        elevLow: geo.elevLow,
      },
    })),
  };

  const handleClick = useCallback((event: MapMouseEvent) => {
    const features = event.features;
    const feature = features?.[0];
    if (!feature?.properties) return;
    setPopupInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      exercise: feature.properties.exercise,
      title: feature.properties.title,
      elevLow: feature.properties.elevLow,
      elevHigh: feature.properties.elevHigh,
    });
  }, []);

  return (
    <div className="relative border border-border h-full rounded-lg overflow-hidden">
          <Map
            ref={mapRef}
            initialViewState={{ longitude: -117.8628, latitude: 33.7758, zoom: 3 }}
            onLoad={() => setMapReady(true)}
            style={{ height: "100%", width: "100%", minHeight: "480px" }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            scrollZoom={false}
            cooperativeGestures={true}
            interactiveLayerIds={[LAYER_ID]}
            onClick={handleClick}
          >
            <NavigationControl position="top-right" />
            <Source id="routes-source" type="geojson" data={geojson}>
              <Layer {...routeLayer} />
            </Source>
            {popupInfo && (
              <Popup
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                anchor="bottom"
                onClose={() => setPopupInfo(null)}
                closeOnClick={false}
              >
                <div className="text-foreground">
                  <h3 className="font-semibold">
                    {popupInfo.exercise}: {popupInfo.title}
                  </h3>
                  <p className="text-sm">
                    Elevation: {popupInfo.elevLow}m - {popupInfo.elevHigh}m
                  </p>
                </div>
              </Popup>
            )}
          </Map>
          {races.length > 1 && (
            <div className="absolute top-3 left-3 right-14 flex flex-wrap gap-2">
              {races.map((race) => (
                <button
                  key={race.id}
                  type="button"
                  onClick={() => selectRace(race.id)}
                  aria-pressed={race.id === activeId}
                  className={`rounded-full border px-3 py-1 text-xs backdrop-blur transition-colors ${
                    race.id === activeId
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background/70 text-foreground hover:bg-background/90"
                  }`}
                >
                  {race.title}
                </button>
              ))}
            </div>
          )}
    </div>
  );
};

export default RouteMapCard;
