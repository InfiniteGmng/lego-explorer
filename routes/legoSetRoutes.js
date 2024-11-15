import express from "express";
import {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
  updateLegoSet,
  deleteLegoSet,
} from "../controllers/legoSetController.js";

const router = express.Router();

router.get("/", legoSetController.getAllLegoSets);
router.get("/:id", legoSetController.getLegoSetById);
router.post("/", legoSetController.addLegoSet);
router.put("/:id", legoSetController.updateLegoSet);
router.delete("/:id", legoSetController.deleteLegoSet);

export default router;
