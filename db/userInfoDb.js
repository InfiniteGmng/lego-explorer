import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from config.env
dotenv.config({ path: "./config.env" });

// Destructure database credentials from environment variables
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

// Establish a connection to the database
let connect;

try {
  connect = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
  });
  console.log("Connected to the UserInfo database successfully!");
} catch (error) {
  console.error("Failed to connect to the UserInfo database:", error.message);
  process.exit(1); // Exit the process if the connection fails
}

// Database query functions

/**
 * Retrieve all user records.
 * @returns {Promise<Array>} Array of user records.
 */
async function getAllUserInfo() {
  const [results] = await connect.query("SELECT * FROM users");
  return results;
}

/**
 * Retrieve a user record by ID.
 * @param {number} id - The ID of the user.
 * @returns {Promise<Object|null>} The user record or null if not found.
 */
async function getUserInfoById(id) {
  const [results] = await connect.query("SELECT * FROM users WHERE id = ?", [
    id,
  ]);
  return results.length > 0 ? results[0] : null;
}

/**
 * Add a new user record to the database.
 * @param {Object} user - The user data.
 * @param {string} user.username - The username of the user.
 * @param {string} user.email - The email of the user.
 * @param {Array<string>} user.setsOwned - The list of Lego set numbers owned.
 * @param {string} user.favoriteTheme - The user's favorite Lego theme.
 * @param {number} user.totalPieces - The total number of Lego pieces owned.
 */
async function addUserInfo(user) {
  const { username, email, setsOwned, favoriteTheme, totalPieces } = user;
  await connect.query(
    "INSERT INTO users (username, email, setsOwned, favoriteTheme, totalPieces) VALUES (?, ?, ?, ?, ?)",
    [username, email, JSON.stringify(setsOwned), favoriteTheme, totalPieces]
  );
}

/**
 * Update an existing user record by ID.
 * @param {number} id - The ID of the user to update.
 * @param {Object} updatedData - The updated user data.
 * @param {string} updatedData.username - The username of the user.
 * @param {string} updatedData.email - The email of the user.
 * @param {Array<string>} updatedData.setsOwned - The list of Lego set numbers owned.
 * @param {string} updatedData.favoriteTheme - The user's favorite Lego theme.
 * @param {number} updatedData.totalPieces - The total number of Lego pieces owned.
 */
async function updateUserInfo(id, updatedData) {
  const { username, email, setsOwned, favoriteTheme, totalPieces } =
    updatedData;
  await connect.query(
    "UPDATE users SET username = ?, email = ?, setsOwned = ?, favoriteTheme = ?, totalPieces = ? WHERE id = ?",
    [username, email, JSON.stringify(setsOwned), favoriteTheme, totalPieces, id]
  );
}

/**
 * Delete a user record by ID.
 * @param {number} id - The ID of the user to delete.
 */
async function deleteUserInfo(id) {
  await connect.query("DELETE FROM users WHERE id = ?", [id]);
}

// Export query functions for use in controllers
export default {
  getAllUserInfo,
  getUserInfoById,
  addUserInfo,
  updateUserInfo,
  deleteUserInfo,
};
