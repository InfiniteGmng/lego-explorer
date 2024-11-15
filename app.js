const express = require("express");
const app = express();

// Middleware to parse JSON bodies

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
