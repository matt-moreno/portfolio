import { useState, useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Runs.css"

export default function Runs() {
    const [data, setData] = useState()

    useEffect(() => {
      const getStravaData = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/stravaData")
          const result = await response.json()
          setData(result)
      } catch (error) {
          console.error('Error fetching data:', error)
        }    
      }

      getStravaData()
    }, [])
    
    console.log(data)

    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </MapContainer>
    )
}