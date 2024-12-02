import express from "express";
import {
  getAllUserInfo,
  getUserInfoById,
  addUserInfo,
  updateUserInfo,
  deleteUserInfo,
} from "../controllers/userInfoController.js";

const router = express.Router();

// Middleware to log incoming requests for debugging
router.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} request to ${req.url}`
  );
  next();
});

// Validate request payloads for POST and PUT routes
const validateUserInfo = (req, res, next) => {
  const { username, email, setsOwned, favoriteTheme, totalPieces } = req.body;

  // Ensure required fields are provided
  if (
    !username ||
    !email ||
    !setsOwned ||
    !favoriteTheme ||
    totalPieces === undefined
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Additional validations
  if (typeof totalPieces !== "number" || totalPieces < 0) {
    return res
      .status(400)
      .json({ error: "Total pieces must be a non-negative number." });
  }
  if (!Array.isArray(setsOwned)) {
    return res
      .status(400)
      .json({ error: "Sets owned must be an array of set numbers." });
  }
  if (typeof username !== "string" || username.trim() === "") {
    return res
      .status(400)
      .json({ error: "Username must be a non-empty string." });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  next();
};

// Define routes for user information
router.get("/", getAllUserInfo); // Get all user records
router.get("/:id", getUserInfoById); // Get a specific user record by ID
router.post("/", validateUserInfo, addUserInfo); // Add a new user record
router.put("/:id", validateUserInfo, updateUserInfo); // Update an existing user record
router.delete("/:id", deleteUserInfo); // Delete a user record

export default router;
