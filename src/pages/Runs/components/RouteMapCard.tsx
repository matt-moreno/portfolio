import { useState, useCallback } from "react";
import Map, { Source, Layer, Popup, NavigationControl } from "react-map-gl/mapbox";
import type { LayerProps } from "react-map-gl/mapbox";
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
  paint: { "line-color": "#f97316", "line-width": 3, "line-opacity": 0.8 },
};

const RouteMapCard = ({ geoData }: RouteMapCardProps) => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);

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
    <div className="border-orange-500 border-2 h-full rounded-lg overflow-hidden">
          <Map
            initialViewState={{ longitude: -117.9623, latitude: 33.8775, zoom: 12 }}
            style={{ height: "100%", width: "100%", minHeight: "480px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
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
                <div className="text-slate-900">
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
    </div>
  );
};

export default RouteMapCard;
