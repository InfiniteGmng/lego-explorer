import express from "express";
import chalk from "chalk";

// Create the Express app
const app = express();

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Set the port to listen on
const PORT = 3030;

// Start the server
app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});
