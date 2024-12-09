import { useState, useEffect } from "react";
import { MapContainer, Popup, TileLayer, Polyline } from "react-leaflet";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
} from "./utils";
import { CardInfo } from "../../components/Card/CardInfo";
import { weeklyTrackerData, marathonMajors } from "./constants";
import { GeoTypes, RecentActivityTypes, ActivityTypes } from "./RunTypes";
import polyline from "@mapbox/polyline";
import Loading from "../../components/Loading/Loading";
import "./Runs.css";

export default function Runs() {
  const [loading, setLoading] = useState(true);
  const [geoData, setGeoData] = useState<GeoTypes[]>([]);
  // const [weeklyData, setWeeklyData] = useState()
  const [recentActivity, setRecentActivity] = useState<RecentActivityTypes[]>(
    []
  );

  useEffect(() => {
    const getStravaData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/stravaData");
        const result = await response.json();
        const geoArr: GeoTypes[] = [];
        const activityArr: RecentActivityTypes[] = [];
        result.map((data: ActivityTypes, index: number) => {
          console.log(data);
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

          if (index < 3) {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getStravaData();
  }, []);

  const marathonStars = marathonMajors.map((marathon) => {
    return (
      <div className="star-container">
        <span className={marathon.completed ? "star-filled" : "star"}>★</span>
        <p>{marathon.city + " " + marathon.flag}</p>
        {marathon.completed && <p>{marathon.time}</p>}
      </div>
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-wrapper">
      <section className="runs-container">
        <h1>Activity Dashboard</h1>
        <div className="strava-info">
          <p>My run data provided by the Strava API</p>
          <a
            href="https://developers.strava.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/strava-logo.png"
              alt="Strava Logo"
              className="strava-logo"
            />
          </a>
        </div>

        <div className="dashboard-top">
          <MapContainer
            center={[33.8775, -117.9623]}
            zoom={12}
            scrollWheelZoom={false}
            id="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoData.map((geo) => (
              <Polyline key={geo.id} positions={geo.polyline}>
                <Popup>
                  <div>
                    <h2>{geo.exercise + ": " + geo.title}</h2>
                  </div>
                </Popup>
              </Polyline>
            ))}
          </MapContainer>
          <div className="dashboard-top-right">
            <CardInfo className="weekly-tracker">
              <h2>Weekly tracker</h2>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={weeklyTrackerData}>
                  <Tooltip />
                  <XAxis dataKey="name" tick={{ fill: "white" }} />
                  <Bar dataKey="miles" fill="#fc4c02" />
                </BarChart>
              </ResponsiveContainer>
            </CardInfo>
            <CardInfo className="marathons">
              <h2>World Marathon Majors</h2>
              <div className="marathon-stars">{marathonStars}</div>
            </CardInfo>
          </div>
        </div>

        <div className="dashboard-bottom">
          <CardInfo className="recap">
            <h2>Recap</h2>
            <p>Total miles this year, Total miles this week, June totals</p>
            <ul>
              <li>16 hrs</li>
              <li>98.1 mi</li>
            </ul>
          </CardInfo>
          <CardInfo className="recent-activity">
            <h2>Recent Activity</h2>
            {recentActivity.map((activity, index) => (
              <div className="activity-container" key={index}>
                <p>Distance: {activity.distance}/mi</p>
                <p>Avg Pace: {activity.pace}/mi</p>
                <p>Time: {activity.time}</p>
                {activity.heartRate && (
                  <p>Avg Heart Rate: {activity.heartRate} bpm</p>
                )}
              </div>
            ))}
          </CardInfo>
        </div>
      </section>
    </div>
  );
}
