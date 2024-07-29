import { useState, useEffect } from "react";
import { MapContainer, Popup, TileLayer, Polyline } from "react-leaflet";
import { ActivityTypes } from "./RunTypes";
import polyline from "@mapbox/polyline";
import Loading from "../../components/Loading/Loading";
import "./Runs.css";

interface StravaTypes {
  id: number;
  title: string;
  exercise: string;
  elevHigh: number;
  elevLow: number;
  startLat: number[];
  endLat: number[];
  polyline: [number, number][];
}

export default function Runs() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<StravaTypes[]>([]);

  useEffect(() => {
    const getStravaData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/stravaData");
        const result = await response.json();
        const stravaArr: StravaTypes[] = [];
        result.map((data: ActivityTypes) => {
          console.log(data);
          stravaArr.push({
            id: data.id,
            title: data.name,
            exercise: data.type,
            elevHigh: data.elev_high,
            elevLow: data.elev_low,
            startLat: data.start_latlng,
            endLat: data.end_latlng,
            polyline: polyline.decode(data.map.summary_polyline),
          });
        });
        setActivities(stravaArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getStravaData();
  }, []);

  // TODO: CREATE LOADING COMPONENT
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-wrapper">
      <section className="runs-activity">
        <h1>Activity Dashboard</h1>
        <p>My run data provided by the Strava API</p>

        <div className="dashboard-top">
          <MapContainer
            center={[34.0522, -118.2437]}
            zoom={12}
            scrollWheelZoom={false}
            id="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {activities.map((activity) => (
              <Polyline key={activity.id} positions={activity.polyline}>
                <Popup>
                  <div>
                    <h2>{activity.exercise + ": " + activity.title}</h2>
                  </div>
                </Popup>
              </Polyline>
            ))}
          </MapContainer>
          <div className="dashboard-top-right">
            <div className="runs-card">card</div>
            <div className="runs-card">card</div>
          </div>
        </div>

        <div className="dashboard-bottom">
          <div className="runs-card month-recap">card</div>
          <div className="runs-card recent-activity">card</div>
        </div>
      </section>
    </div>
  );
}
