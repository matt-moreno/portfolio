import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Map, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import type { LayerProps } from "react-map-gl/mapbox";
import type { FeatureCollection } from "geojson";
import polyline from "@mapbox/polyline";
import "mapbox-gl/dist/mapbox-gl.css";
import Loading from "../../../components/Loading/Loading";
import { ActivityTypes, StravaPhoto } from "../RunTypes";
import { races } from "../constants";
import {
  convertMetersToMiles,
  convertSecondsToFormattedTime,
  convertMetersPerSecondToMilesPerHour,
} from "../utils";

const routeLayer: LayerProps = {
  id: "route-layer",
  type: "line",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#f97316", "line-width": 4, "line-opacity": 0.9 },
};

export default function MarathonDetail() {
  const { stravaId } = useParams<{ stravaId: string }>();
  const [activity, setActivity] = useState<ActivityTypes | null>(null);
  const [photos, setPhotos] = useState<StravaPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const race = races.find((r) => r.stravaId === Number(stravaId));

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL;

    const fetchActivity = async () => {
      try {
        const response = await fetch(`${base}/api/strava/${stravaId}`);
        if (!response.ok) throw new Error("Activity not found");
        const data = await response.json();
        setActivity(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load activity",
        );
      } finally {
        setLoading(false);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await fetch(`${base}/api/strava/${stravaId}/photos`);
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data)) setPhotos(data);
      } catch {
        // photos are optional — fail silently
      }
    };

    fetchActivity();
    fetchPhotos();
  }, [stravaId]);

  if (loading) return <Loading />;

  if (error || !activity) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <p className="text-slate-600 dark:text-slate-400">
          {error ?? "Activity not found"}
        </p>
      </div>
    );
  }

  const decodedPolyline = activity.map?.summary_polyline
    ? polyline.decode(activity.map.summary_polyline)
    : [];

  const geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: decodedPolyline.length
      ? [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: decodedPolyline.map(([lat, lng]) => [lng, lat]),
            },
            properties: {},
          },
        ]
      : [],
  };

  const [startLat, startLng] = activity.start_latlng ?? [0, 0];

  const formattedDate = (() => {
    const dateStr = activity.start_date_local as string;
    const date = new Date(dateStr.replace("Z", ""));
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  })();

  const stats = [
    {
      label: "Distance",
      value: `${convertMetersToMiles(activity.distance)} mi`,
    },
    {
      label: "Finish Time",
      value: convertSecondsToFormattedTime(activity.moving_time),
    },
    {
      label: "Avg Pace",
      value: `${convertMetersPerSecondToMilesPerHour(activity.average_speed)}/mi`,
    },
    ...(activity.average_heartrate
      ? [
          {
            label: "Avg Heart Rate",
            value: `${Math.round(activity.average_heartrate)} bpm`,
          },
        ]
      : []),
    {
      label: "Elevation Gain",
      value: `${Math.round(activity.total_elevation_gain)} m`,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back button + header */}
        <div className="mb-6 relative">
          <NavLink
            to="/runs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium text-sm mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to runs
          </NavLink>

          <div className="mt-4">
            {race && (
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
                Race Recap
              </span>
            )}
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-1">
              {race?.title ?? activity.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {formattedDate}
            </p>
          </div>
        </div>

        {/* Hero map */}
        {decodedPolyline.length > 0 && (
          <div className="border-2 border-orange-500 rounded-2xl overflow-hidden shadow-xl mb-6 h-[420px]">
            <Map
              initialViewState={{
                longitude: startLng,
                latitude: startLat,
                zoom: 12,
              }}
              style={{ height: "100%", width: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
              scrollZoom={false}
              cooperativeGestures={true}
            >
              <NavigationControl position="top-right" />
              <Source id="route-source" type="geojson" data={geojson}>
                <Layer {...routeLayer} />
              </Source>
            </Map>
          </div>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 dark:bg-slate-800/50 border border-orange-500/30 rounded-xl p-4 text-center backdrop-blur-sm"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {stat.label}
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Blog body */}
        <article className="prose prose-slate dark:prose-invert max-w-none mb-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Race Report
          </h2>

          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            {race?.blogContent ? (
              <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-slate-700 dark:text-slate-300 not-italic space-y-4">
                {race.blogContent.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              </div>
            ) : (
              <>
                <p className="italic text-slate-400 dark:text-slate-500 text-sm border-l-2 border-orange-500/40 pl-3">
                  Race notes coming soon — check back after I've had time to
                  write this up.
                </p>

                <p>
                  Every race tells a different story — the weeks of training
                  that led up to it, the morning of race day jitters, and the
                  miles themselves. This page will eventually have a full
                  write-up of how {race?.title ?? activity.name} went: what
                  worked, what didn't, and what I'd do differently next time.
                </p>
              </>
            )}

            {activity.description && (
              <p className="bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-slate-700 dark:text-slate-300 not-italic">
                {activity.description}
              </p>
            )}
          </div>
        </article>

        {/* Strava photos */}
        {photos.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Photos
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2">
                ({photos.length})
              </span>
            </h2>
            <div className={photos.length === 1 ? "" : "columns-2 gap-3"}>
              {photos.map((photo) => (
                <div
                  key={photo.unique_id}
                  className="break-inside-avoid mb-3 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <img
                    src={photo.urls["5000"]}
                    alt={photo.caption || (race?.title ?? activity.name)}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
