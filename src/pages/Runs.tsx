import { useState, useEffect } from "react"

export default function Runs() {
    const [data, setData] = useState()

    useEffect(() => {
      const refreshAccessToken = async () => {
        try {
        const response = await fetch("https://www.strava.com/oauth/token", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
                client_secret: import.meta.env.VITE_STRAVA_SECRET,
                code: import.meta.env.VITE_STRAVA_AUTH_CODE,
                grant_type: 'refresh_token',
                refresh_token: import.meta.env.VITE_STRAVA_REFRESH_TOKEN
            })
        })
        const result = await response.json()
        fetchActivityData(result.access_token)
      } catch (error) {
        console.error('Error fetching data:', error)
        }    
      }

      const fetchActivityData = async (token: string) => {
        try {
          const response = await fetch(`https://www.strava.com/api/v3/activities?access_token=${token}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      refreshAccessToken()
    }, [])
    
    console.log(data)

    return (
        <div>
            <h1>Strava API call???</h1>
        </div>
    )
}