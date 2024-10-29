import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3030;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
