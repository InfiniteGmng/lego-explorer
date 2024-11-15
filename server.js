import express from "express";
import legoSetRoutes from "./routes/legoSetRoutes.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";

const app = express();
const port = 3030;

app.use(express.static("./public"));
app.use(express.json());

// Define routes for Lego sets and user information
app.use("/api/legoSets", legoSetRoutes);
app.use("/api/userInfo", userInfoRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
