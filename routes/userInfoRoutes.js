import express from "express";
import {
  getAllUserInfo,
  getUserInfoById,
  addUserInfo,
  updateUserInfo,
  deleteUserInfo,
} from "../controllers/userInfoController.js";

const router = express.Router();

router.get("/", userInfoController.getAllUserInfo);
router.get("/:id", userInfoController.getUserInfoById);
router.post("/", userInfoController.addUserInfo);
router.put("/:id", userInfoController.updateUserInfo);
router.delete("/:id", userInfoController.deleteUserInfo);

export default router;
