import { useState, useEffect } from "react";
import {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
  calculateCurrentWeekMiles,
  calculateDailyProgress,
} from "./utils";
import { GeoTypes, RecentActivityTypes, ActivityTypes } from "./RunTypes";
import polyline from "@mapbox/polyline";
import Loading from "../../components/Loading/Loading";
import "leaflet/dist/leaflet.css";
import RouteMapCard from "./components/RouteMapCard";
import WeeklyTracker from "./components/WeeklyTracker";
import MarathonMajorsCard from "./components/MarathonMajorsCard";
import RunningRecapCard from "./components/RunningRecapCard";
import RecentActivityCard from "./components/RecentActivityCard";

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
          <div className="xl:col-span-3">
            <RouteMapCard geoData={geoData} />
          </div>

          <div className="xl:col-span-2 flex flex-col gap-6">
            <WeeklyTracker
              currentWeekMiles={weekMiles}
              dayProgress={dailyProgress}
            />
            <MarathonMajorsCard />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <RunningRecapCard athleteStats={athleteStats} gearName={gear?.name} />
          <RecentActivityCard recentActivity={recentActivity} />
        </div>
      </section>
    </div>
  );
}
