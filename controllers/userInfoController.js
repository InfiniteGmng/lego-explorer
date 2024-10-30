const userInfo = require("../data/data.json").userInfo;

// Retrieve all user information records
const getAllUserInfo = (req, res) => {
  res.json(userInfo);
};

// Retrieve specific user information by ID
const getUserInfoById = (req, res) => {
  const user = userInfo.find((user) => user.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// Add a new user information record
const addUserInfo = (req, res) => {
  const newUser = req.body;

  // Check if a user with the same ID already exists
  if (userInfo.find((user) => user.id === newUser.id)) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  userInfo.push(newUser);
  res.status(201).json(newUser);
};

// Update an existing user information record by ID
const updateUserInfo = (req, res) => {
  const { id } = req.params;
  const index = userInfo.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Update user data with the request body data
  userInfo[index] = { ...userInfo[index], ...req.body };
  res.json(userInfo[index]);
};

// Delete a user information record by ID
const deleteUserInfo = (req, res) => {
  const { id } = req.params;
  const index = userInfo.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Remove the user from the array
  userInfo.splice(index, 1);
  res.status(204).end();
};

module.exports = {
  getAllUserInfo,
  getUserInfoById,
  addUserInfo,
  updateUserInfo,
  deleteUserInfo,
};
