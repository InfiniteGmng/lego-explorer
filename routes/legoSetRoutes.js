import express from "express";
import {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
  updateLegoSet,
  deleteLegoSet,
} from "../controllers/legoSetController.js";

const router = express.Router();

// Middleware to log incoming requests for debugging
router.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} request to ${req.url}`
  );
  next();
});

// Validate request payloads for POST and PUT routes
const validateLegoSet = (req, res, next) => {
  const { name, setNumber, theme, pieces, price, releaseYear, availability } =
    req.body;

  // Ensure all required fields are provided
  if (
    !name ||
    !theme ||
    !pieces ||
    !price ||
    !releaseYear ||
    availability === undefined
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Additional validations (e.g., numeric fields)
  if (typeof pieces !== "number" || pieces <= 0) {
    return res.status(400).json({ error: "Pieces must be a positive number." });
  }
  if (typeof price !== "number" || price < 0) {
    return res
      .status(400)
      .json({ error: "Price must be a non-negative number." });
  }
  if (
    typeof releaseYear !== "number" ||
    releaseYear < 1900 ||
    releaseYear > new Date().getFullYear()
  ) {
    return res.status(400).json({ error: "Invalid release year." });
  }

  next();
};

// Define routes for Lego sets
router.get("/", getAllLegoSets); // Get all Lego sets
router.get("/:id", getLegoSetById); // Get a specific Lego set by ID
router.post("/", validateLegoSet, addLegoSet); // Add a new Lego set
router.put("/:id", validateLegoSet, updateLegoSet); // Update an existing Lego set
router.delete("/:setNumber", deleteLegoSet); // Delete a Lego set

export default router;
