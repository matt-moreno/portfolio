import { useState, useEffect } from "react"

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
        <div>
            <h1>Strava API call???</h1>
        </div>
    )
}