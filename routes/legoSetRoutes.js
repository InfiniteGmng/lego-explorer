const express = require("express");
const router = express.Router();
const legoSetController = require("../controllers/legoSetController");

// Route to retrieve all Lego sets
router.get("/legoSets", legoSetController.getAllLegoSets);

// Route to retrieve a specific Lego set by ID
router.get("/legoSets/:id", legoSetController.getLegoSetById);

// Route to add a new Lego set
router.post("/legoSets", legoSetController.addLegoSet);

// Route to update an existing Lego set by ID
router.put("/legoSets/:id", legoSetController.updateLegoSet);

// Route to delete a Lego set by ID
router.delete("/legoSets/:id", legoSetController.deleteLegoSet);

module.exports = router;
