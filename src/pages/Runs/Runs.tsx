import { useState, useEffect } from "react";
import { MapContainer, Popup, TileLayer, Polyline } from "react-leaflet";
import {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
  calculateCurrentWeekMiles,
  calculateDailyProgress,
} from "./utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marathonMajors } from "./constants";
import { GeoTypes, RecentActivityTypes, ActivityTypes } from "./RunTypes";
import polyline from "@mapbox/polyline";
import Loading from "../../components/Loading/Loading";
import "leaflet/dist/leaflet.css";

// Weekly Tracker Component
const WeeklyTracker = ({
  currentWeekMiles,
  dayProgress,
}: {
  currentWeekMiles: number;
  dayProgress: number[];
}) => {
  const weeklyGoal = 30;
  const progressPercentage = (currentWeekMiles / weeklyGoal) * 100;
  const circumference = 2 * Math.PI * 45; // radius of 45
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Card className="border-orange-500 bg-white/80 dark:bg-slate-800 border-2 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-orange-500 text-lg font-semibold">📊</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-semibold">
          Weekly goal: {weeklyGoal} mi
        </h3>
        <span className="text-orange-400 text-sm">🔥</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 xl:gap-12">
        {/* Circular Progress */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 xl:w-40 xl:h-40">
          <svg
            className="w-32 h-32 md:w-36 md:h-36 xl:w-40 xl:h-40 transform -rotate-90"
            viewBox="0 0 100 100"
          >
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
            <span className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold">
              {currentWeekMiles.toFixed(1)}
            </span>
            <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              mi
            </span>
          </div>
        </div>

        {/* Daily Progress */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 md:gap-3">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 md:gap-2"
              >
                <div
                  className={`w-2.5 h-10 md:w-3 md:h-12 rounded-full ${
                    dayProgress[index]
                      ? "bg-green-500"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                />
                <span className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium">
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
  const [weekMiles, setWeekMiles] = useState(0);
  const [dailyProgress, setDailyProgress] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const [athleteStats, setAthleteStats] = useState({
    totalRuns: 0,
    totalMiles: 0,
    ytdRuns: 0,
    ytdMiles: 0,
  });
  const [gear, setGear] = useState<{ name: string }>();

  useEffect(() => {
    const getStravaData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/strava`
        );
        const result = await response.json();
        const geoArr: GeoTypes[] = [];
        const activityArr: RecentActivityTypes[] = [];

        result.map((data: ActivityTypes, index: number) => {
          // Only process Run activities
          if (data.type !== "Run") {
            return;
          }

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
              date: (() => {
                // Parse the date string manually to avoid timezone conversion issues
                const dateStr = data.start_date_local as string;
                const date = new Date(dateStr.replace("Z", ""));
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              })(),
            });
          }
        });

        setGeoData(geoArr);
        setRecentActivity(activityArr);

        // Calculate actual current week miles from Strava data
        const currentWeekMiles = calculateCurrentWeekMiles(result);

        // Calculate daily progress for current week
        const weeklyDayProgress = calculateDailyProgress(result);
        setDailyProgress(weeklyDayProgress);

        setWeekMiles(currentWeekMiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Get Athlete Stats
    const getAthleteStats = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/athlete-stats`
        );
        const result = await response.json();
        setAthleteStats({
          totalRuns: result.all_run_totals.count,
          totalMiles: convertMetersToMiles(result.all_run_totals.distance),
          ytdRuns: result.ytd_run_totals.count,
          ytdMiles: convertMetersToMiles(result.ytd_run_totals.distance),
        });
      } catch (error) {
        console.error("Error fetching athlete stats:", error);
      } finally {
        setLoading(false);
      }
    };

    // Get Gear
    const getGear = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/gear`
        );
        const result = await response.json();
        console.log(result);
        setGear(result);
      } catch (error) {
        console.error("Error fetching gear:", error);
      } finally {
        setLoading(false);
      }
    };

    getStravaData();
    getAthleteStats();
    getGear();
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
      <section className="container mx-auto px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
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
                src="/assets/strava-logo.png"
                alt="Strava Logo"
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8 max-w-7xl mx-auto">
          {/* Map - Takes up 3 columns */}
          <div className="xl:col-span-3">
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
          </div>

          {/* Right Column - Weekly Tracker and Marathon Majors Stacked */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* Weekly Tracker */}
            <WeeklyTracker
              currentWeekMiles={weekMiles}
              dayProgress={dailyProgress}
            />

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
                    Total Miles (All Time):
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {athleteStats.totalMiles} mi
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Total Runs (All Time):
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {athleteStats.totalRuns}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Year to Date Miles:
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {athleteStats.ytdMiles} mi
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Year to Date Runs:
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {athleteStats.ytdRuns}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-slate-700 dark:text-slate-300">
                    Shoes:
                  </span>
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                    {gear?.name}
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
                    // Color Option 1: Vibrant Orange Glow
                    // className="group bg-gradient-to-r from-orange-400/20 to-orange-500/20 dark:from-orange-600/20 dark:to-orange-700/20 rounded-xl p-1.5 border border-orange-400/30 dark:border-orange-700/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    className="group bg-gradient-to-r from-orange-300/30 to-orange-500/30 dark:from-orange-700/30 dark:to-orange-800/30 rounded-xl p-1.5 border border-orange-400/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-2 md:justify-around gap-2 items-center">
                      {/* Distance */}
                      <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                        <span className="text-orange-500 text-sm">📏</span>
                        <div className="flex flex-col">
                          <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                            {activity.distance}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            miles
                          </span>
                        </div>
                      </div>

                      {/* Pace */}
                      <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                        <span className="text-orange-500 text-sm">⏱️</span>
                        <div className="flex flex-col">
                          <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                            {activity.pace}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            /mi
                          </span>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                        <span className="text-orange-500 text-sm">🕐</span>
                        <div className="flex flex-col">
                          <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                            {activity.time}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            total
                          </span>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-sm border border-orange-200/50 dark:border-orange-800/30">
                        <span className="text-orange-500 text-sm">📅</span>
                        <div className="flex flex-col">
                          <span className="text-slate-900 dark:text-white font-bold text-base leading-none">
                            {activity.date}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            date
                          </span>
                        </div>
                      </div>

                      {/* Heart rate - Always present on mobile, conditional on desktop */}
                      <div
                        className={`flex items-center gap-2 px-2 py-0.5 rounded-lg shadow-sm md:hidden ${
                          activity.heartRate
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                            : "bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
                        }`}
                      >
                        <span className="text-base">
                          {activity.heartRate ? "❤️" : "💤"}
                        </span>
                        <div className="flex flex-col">
                          <span
                            className={`font-bold text-base leading-none ${
                              activity.heartRate
                                ? "text-white"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            {activity.heartRate || "--"}
                          </span>
                          <span
                            className={`text-xs ${
                              activity.heartRate
                                ? "text-red-100"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            bpm
                          </span>
                        </div>
                      </div>

                      {/* Heart rate - Desktop version (conditional) */}
                      {activity.heartRate && (
                        <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-0.5 rounded-lg shadow-sm">
                          <span className="text-base">❤️</span>
                          <div className="flex flex-col">
                            <span className="font-bold text-base leading-none">
                              {activity.heartRate}
                            </span>
                            <span className="text-red-100 text-xs">bpm</span>
                          </div>
                        </div>
                      )}
                    </div>
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
