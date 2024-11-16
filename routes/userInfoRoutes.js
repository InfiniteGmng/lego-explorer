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
  const { allUsers, userById, addUser, updateUser, deleteUser, year } =
    req.body;

  if (
    !allUsers ||
    !userById ||
    !addUser ||
    !updateUser ||
    !deleteUser ||
    year === undefined
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
};

// Define routes for User information
router.get("/", getAllUserInfo);
router.get("/:id", getUserInfoById);
router.post("/", validateUserInfo, addUserInfo);
router.put("/:id", validateUserInfo, updateUserInfo);
router.delete("/:id", deleteUserInfo);

export default router;
