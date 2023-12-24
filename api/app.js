/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
require('dotenv').config()

const corsOptions = {
  origin: "http://localhost:5173"
}

app.use(cors(corsOptions))

app.get("/api/stravaData", (req, res) => {
  const refreshAccessToken = async () => {
    try {
    const response = await fetch("https://www.strava.com/oauth/token", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_SECRET,
            code: process.env.STRAVA_AUTH_CODE,
            grant_type: 'refresh_token',
            refresh_token: process.env.STRAVA_REFRESH_TOKEN
        })
    })
    const result = await response.json()
    fetchActivityData(result.access_token)
  } catch (error) {
    console.error('Error fetching data:', error)
    }    
  }

  const fetchActivityData = async (token) => {
    try {
      const response = await fetch(`https://www.strava.com/api/v3/activities?access_token=${token}`);
      const result = await response.json();
      res.send(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  refreshAccessToken()
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});