import userInfoDb from "../db/userInfoDb.js";

// Retrieve all user information records
export const getAllUserInfo = async (req, res) => {
  try {
    const users = await userInfoDb.getAllUserInfo();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user information" });
  }
};

// Retrieve specific user information by ID
export const getUserInfoById = async (req, res) => {
  try {
    const user = await userInfoDb.getUserInfoById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user information" });
  }
};

// Add a new user information record
export const addUserInfo = async (req, res) => {
  const newUser = req.body;
  try {
    await userInfoDb.addUserInfo(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user information" });
  }
};

// Update an existing user information record by ID
export const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  try {
    await userInfoDb.updateUserInfo(id, req.body);
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user information" });
  }
};

// Delete a user information record by ID
export const deleteUserInfo = async (req, res) => {
  const { id } = req.params;
  try {
    await userInfoDb.deleteUserInfo(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user information" });
  }
};
