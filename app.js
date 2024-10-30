const express = require("express");
const app = express();
const legoSetRoutes = require("./routes/legoSetRoutes");
const userInfoRoutes = require("./routes/userInfoRoutes");

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes for Lego sets and user information
app.use("/api", legoSetRoutes);
app.use("/api", userInfoRoutes);

// Define a basic route for testing server functionality
app.get("/", (req, res) => {
  res.send("Welcome to the Lego Web API");
});

// Error handling middleware for any unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
