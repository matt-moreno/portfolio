import { useState, useEffect } from "react"

export default function Runs() {
    const [data, setData] = useState()
    const url = 'https://www.strava.com/api/v3/athlete'

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_STRAVA_ACCESS}`
                }
            });
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [])

      console.log(data)

    return (
        <div>
            <h1>Strava API call???</h1>
        </div>
    )
}