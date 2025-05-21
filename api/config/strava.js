/* global process */
import dotenv from "dotenv";
dotenv.config();

const stravaConfig = {
  clientId: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_SECRET,
  authCode: process.env.STRAVA_AUTH_CODE,
  refreshToken: process.env.STRAVA_REFRESH_TOKEN,
  baseUrl: "https://www.strava.com/api/v3",
  tokenUrl: "https://www.strava.com/oauth/token",
};

export default stravaConfig;
