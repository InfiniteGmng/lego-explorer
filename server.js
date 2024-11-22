import express from "express";
import legoSetRoutes from "./routes/legoSetRoutes.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import dotenv from "dotenv";

// Initialize dotenv to use config.env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("./public"));

// Define routes for Lego sets and user information
app.use("/api/legoSets", legoSetRoutes);
app.use("/api/userInfo", userInfoRoutes);

// Start the server and log the URL
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
