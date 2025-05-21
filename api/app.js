/* global process */
import express from "express";
import cors from "cors";
import stravaRoutes from "./routes/strava.js";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", stravaRoutes);

// Error handling middleware
app.use((error, request, response) => {
  console.error(error.stack);
  response.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong!",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
