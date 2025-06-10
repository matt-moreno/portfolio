import { useState, useEffect } from "react";
import { MapContainer, Popup, TileLayer, Polyline } from "react-leaflet";
import {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
} from "./utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marathonMajors } from "./constants";
import { GeoTypes, RecentActivityTypes, ActivityTypes } from "./RunTypes";
import polyline from "@mapbox/polyline";
import Loading from "../../components/Loading/Loading";
import "leaflet/dist/leaflet.css";

// Weekly Tracker Component
const WeeklyTracker = () => {
  const currentWeekMiles = 5.19;
  const weeklyGoal = 30;
  const progressPercentage = (currentWeekMiles / weeklyGoal) * 100;
  const circumference = 2 * Math.PI * 45; // radius of 45
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const dayProgress = [1, 0, 0, 0, 0, 0, 0]; // Example: Monday completed

  return (
    <Card className="border-orange-500 bg-white/80 dark:bg-slate-800 border-2 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-orange-500 text-lg font-semibold">📊</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-semibold">
          Weekly goal: {weeklyGoal} mi
        </h3>
        <span className="text-orange-400 text-sm">🔥</span>
      </div>

      <div className="flex items-center justify-between">
        {/* Circular Progress */}
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(51, 65, 85)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(34, 197, 94)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-slate-900 dark:text-white text-2xl font-bold">
              {currentWeekMiles}
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-sm">
              mi
            </span>
          </div>
        </div>

        {/* Daily Progress */}
        <div className="flex flex-col items-end">
          <div className="flex gap-2 mb-2">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className={`w-2 h-8 rounded-full ${
                    dayProgress[index]
                      ? "bg-green-500"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                />
                <span className="text-slate-600 dark:text-slate-400 text-xs">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function Runs() {
  const [loading, setLoading] = useState(true);
  const [geoData, setGeoData] = useState<GeoTypes[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivityTypes[]>(
    []
  );
  const [totalStats, setTotalStats] = useState({
    yearMiles: 0,
    monthMiles: 0,
    weekMiles: 0,
  });

  useEffect(() => {
    const getStravaData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/stravaData");
        const result = await response.json();
        const geoArr: GeoTypes[] = [];
        const activityArr: RecentActivityTypes[] = [];
        let totalDistance = 0;

        result.map((data: ActivityTypes, index: number) => {
          console.log(data);
          totalDistance += data.distance;

          geoArr.push({
            id: data.id,
            title: data.name,
            exercise: data.type,
            elevHigh: data.elev_high,
            elevLow: data.elev_low,
            startLat: data.start_latlng,
            endLat: data.end_latlng,
            polyline: polyline.decode(data.map.summary_polyline),
          });

          if (index < 5) {
            activityArr.push({
              distance: convertMetersToMiles(data.distance),
              pace: convertMetersPerSecondToMilesPerHour(data.average_speed),
              time: convertSecondsToFormattedTime(data.moving_time),
              heartRate: data.average_heartrate,
            });
          }
        });

        setGeoData(geoArr);
        setRecentActivity(activityArr);
        // Mock data for now - in real app you'd calculate these from actual dates
        setTotalStats({
          yearMiles: convertMetersToMiles(totalDistance),
          monthMiles: convertMetersToMiles(totalDistance * 0.3),
          weekMiles: 5.19,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getStravaData();
  }, []);

  const marathonStars = marathonMajors.map((marathon, index) => {
    return (
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
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <section className="container mx-auto px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Activity Dashboard
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-8"></div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-slate-600 dark:text-slate-400">
              Powered by the Strava API
            </p>
            <a
              href="https://developers.strava.com/docs/reference/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/src/assets/strava-logo.png"
                alt="Strava Logo"
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8 max-w-7xl mx-auto">
          {/* Map - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 h-full backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
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
          </div>

          {/* Right Column - Weekly Tracker and Marathon Majors Stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Weekly Tracker */}
            <WeeklyTracker />

            {/* World Marathon Majors */}
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Recap Stats */}
          <Card className="border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
                📈 Running Recap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Total Miles (Year)
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {totalStats.yearMiles.toFixed(1)} mi
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Total Miles (Month)
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {totalStats.monthMiles.toFixed(1)} mi
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Total Miles (Week)
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {totalStats.weekMiles} mi
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-orange-500 bg-white/80 dark:bg-slate-800/50 border-2 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 dark:text-white text-xl flex items-center gap-2">
                ⚡ Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap gap-4 justify-between items-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg py-3 px-4 shadow-lg"
                  >
                    <div className="flex gap-4">
                      <span className="text-slate-900 font-semibold text-sm bg-white/20 px-2 py-1 rounded">
                        📏 {activity.distance}mi
                      </span>
                      <span className="text-slate-900 font-semibold text-sm bg-white/20 px-2 py-1 rounded">
                        ⏱️ {activity.pace}/mi
                      </span>
                      <span className="text-slate-900 font-semibold text-sm bg-white/20 px-2 py-1 rounded">
                        🕐 {activity.time}
                      </span>
                    </div>
                    {activity.heartRate && (
                      <span className="text-slate-900 font-semibold text-sm bg-white/20 px-2 py-1 rounded">
                        ❤️ {activity.heartRate} bpm
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
