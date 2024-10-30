// routes/userInfoRoutes.js
const express = require("express");
const router = express.Router();
const userInfoController = require("../controllers/userInfoController");

// Route to retrieve all user information records
router.get("/userInfo", userInfoController.getAllUserInfo);

// Route to retrieve specific user information by ID
router.get("/userInfo/:id", userInfoController.getUserInfoById);

// Route to add a new user information record
router.post("/userInfo", userInfoController.addUserInfo);

// Route to update existing user information by ID
router.put("/userInfo/:id", userInfoController.updateUserInfo);

// Route to delete a user information record by ID
router.delete("/userInfo/:id", userInfoController.deleteUserInfo);

module.exports = router;
