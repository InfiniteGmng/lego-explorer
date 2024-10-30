const express = require("express");
const legoSetRoutes = require("./routes/legoSetRoutes");
const userInfoRoutes = require("./routes/userInfoRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", legoSetRoutes);
app.use("/api", userInfoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
