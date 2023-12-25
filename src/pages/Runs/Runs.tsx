import { useState, useEffect } from "react"
import { MapContainer, Popup, TileLayer, Polyline } from 'react-leaflet'
import polyline from "@mapbox/polyline"
import Loading from "../../components/Loading/Loading"
import "./Runs.css"

export default function Runs() {
    const [loading, setLoading] = useState(true)
    const [strava, setStrava] = useState()

    useEffect(() => {
      const getStravaData = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/stravaData")
          const result = await response.json()
          const stravaArr = []
          result.map((data: any) => {
            stravaArr.push({
              title: data.name,
              exercise: data.type,
              elevHigh: data.elev_high,
              elevLow: data.elev_low,
              startLat: data.start_latlng,
              endLat: data.end_latlng,
              polyline: polyline.decode(data.map.summary_polyline)
            })
          })
          setStrava(stravaArr)
      } catch (error) {
          console.error('Error fetching data:', error)
        } finally {
          setLoading(false)
        } 
      }

      getStravaData()
    }, [])

    // TODO: CREATE LOADING COMPONENT
    if (loading) {
      return <Loading />
    }

    return (
      <div>
        <h1>This is my Strava Activity!</h1>
          <MapContainer center={[34.0522, -118.2437]} zoom={10} scrollWheelZoom={false} id="map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {strava.map((data, index) => (
                <Polyline key={index} positions={data.polyline}>
                  <Popup>
                    <div>
                      <h2>{data.exercise + ": " + data.title}</h2>
                    </div>
                  </Popup>
                </Polyline>
              ))}
          </MapContainer>
      </div>
    )
}