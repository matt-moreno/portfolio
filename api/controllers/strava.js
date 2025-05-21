import stravaConfig from "../config/strava.js";

const refreshAccessToken = async () => {
  try {
    const response = await fetch(stravaConfig.tokenUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: stravaConfig.clientId,
        client_secret: stravaConfig.clientSecret,
        code: stravaConfig.authCode,
        grant_type: "refresh_token",
        refresh_token: stravaConfig.refreshToken,
      }),
    });
    const result = await response.json();
    return result.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

const fetchActivityData = async (token) => {
  try {
    const response = await fetch(
      `${stravaConfig.baseUrl}/activities?access_token=${token}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export { refreshAccessToken, fetchActivityData };
