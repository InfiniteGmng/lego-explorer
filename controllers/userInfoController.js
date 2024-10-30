const userInfo = require("../data/data.json").userInfo;

// Retrieve all user collections
const getAllUsers = (req, res) => {
  res.json(userInfo);
};

// Retrieve a specific user collection by username
const getUserByUsername = (req, res) => {
  const user = userCollections.find((u) => u.username === req.params.username);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Add a new user collection
const addUser = (req, res) => {
  const newUser = req.body;

  // Validation: Check if user with the same username already exists
  const existingUser = userInfo.find((u) => u.username === newUser.username);
  if (existingUser)
    return res.status(400).json({ error: "Username already exists" });

  userInfo.push(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
};
