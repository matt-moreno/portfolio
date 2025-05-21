import express from "express";
import {
  refreshAccessToken,
  fetchActivityData,
} from "../controllers/strava.js";

const router = express.Router();

// Get all activities
router.get("/stravaData", async (req, res) => {
  try {
    const token = await refreshAccessToken();
    const activities = await fetchActivityData(token);
    res.json(activities);
  } catch (error) {
    console.error("Error in /stravaData route:", error);
    res.status(500).json({
      error: "Failed to fetch Strava data",
      message: error.message,
    });
  }
});

// Get a specific activity
router.get("/stravaData/:id", async (req, res) => {
  try {
    // TODO: Implement fetchActivityById in controller
    res.status(501).json({
      error: "Not Implemented",
      message: "This endpoint is not yet implemented",
    });
  } catch (error) {
    console.error("Error fetching specific activity:", error);
    res.status(500).json({
      error: "Failed to fetch activity",
      message: error.message,
    });
  }
});

export default router;
