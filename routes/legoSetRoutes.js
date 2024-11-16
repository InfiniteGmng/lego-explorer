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

  if (
    !name ||
    !setNumber ||
    !theme ||
    !pieces ||
    !price ||
    !releaseYear ||
    availability === undefined
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
};

// Define routes for Lego sets
router.get("/", getAllLegoSets);
router.get("/:id", getLegoSetById);
router.post("/", validateLegoSet, addLegoSet);
router.put("/:id", validateLegoSet, updateLegoSet);
router.delete("/:id", deleteLegoSet);

export default router;
