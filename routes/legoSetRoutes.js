const express = require("express");
const router = express.Router();
const legoSetController = require("../controllers/legoSetController");

// Route to retrieve all Lego sets
router.get("/legoSets", legoSetController.getAllLegoSets);

// Route to retrieve a specific Lego set by ID
router.get("/legoSets/:id", legoSetController.getLegoSetById);

// Route to add a new Lego set
router.post("/legoSets", legoSetController.addLegoSet);

module.exports = router;
