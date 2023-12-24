import { useState, useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import polyline from "@mapbox/polyline"
import Loading from "../../components/Loading/Loading"
import "./Runs.css"

export default function Runs() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const getStravaData = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/stravaData")
          const result = await response.json()
          setData(result)
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
          <MapContainer center={[34.0522, -118.2437]} zoom={13} scrollWheelZoom={false} id="map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[34.0522, -118.2437]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>
      </div>
    )
}