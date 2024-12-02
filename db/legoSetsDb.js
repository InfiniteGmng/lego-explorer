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
  console.log("Connected to the LegoSet database successfully!");
} catch (error) {
  console.error("Failed to connect to the LegoSet database:", error.message);
  process.exit(1); // Exit the process if the connection fails
}

// Database query functions

/**
 * Retrieve all Lego sets.
 * @returns {Promise<Array>} Array of Lego set records.
 */
async function getAllLegoSets() {
  const [results] = await connect.query("SELECT * FROM LegoSet");
  return results;
}

/**
 * Retrieve a Lego set by ID.
 * @param {number} id - The ID of the Lego set.
 * @returns {Promise<Object|null>} The Lego set record or null if not found.
 */
async function getLegoSetById(id) {
  const [results] = await connect.query(
    "SELECT * FROM lego_sets WHERE id = ?",
    [id]
  );
  return results.length > 0 ? results[0] : null;
}

/**
 * Add a new Lego set to the database.
 * @param {Object} legoSet - The Lego set data.
 * @param {string} legoSet.name - The name of the Lego set.
 * @param {string} legoSet.setNumber - The unique set number.
 * @param {string} legoSet.theme - The theme of the Lego set.
 * @param {number} legoSet.pieces - The number of pieces in the set.
 * @param {number} legoSet.price - The price of the Lego set.
 * @param {number} legoSet.releaseYear - The release year of the set.
 * @param {boolean} legoSet.availability - The availability status of the set.
 */
async function addLegoSet(legoSet) {
  const { name, setNumber, theme, pieces, price, releaseYear, availability } =
    legoSet;
  await connect.query(
    "INSERT INTO LegoSet (name, setNumber, theme, pieces, price, releaseYear, availability) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, setNumber, theme, pieces, price, releaseYear, availability]
  );
}

/**
 * Update an existing Lego set by ID.
 * @param {number} id - The ID of the Lego set to update.
 * @param {Object} updatedData - The updated Lego set data.
 * @param {string} updatedData.name - The name of the Lego set.
 * @param {string} updatedData.setNumber - The unique set number.
 * @param {string} updatedData.theme - The theme of the Lego set.
 * @param {number} updatedData.pieces - The number of pieces in the set.
 * @param {number} updatedData.price - The price of the Lego set.
 * @param {number} updatedData.releaseYear - The release year of the set.
 * @param {boolean} updatedData.availability - The availability status of the set.
 */
async function updateLegoSet(id, updatedData) {
  const { name, setNumber, theme, pieces, price, releaseYear, availability } =
    updatedData;
  await connect.query(
    "UPDATE LegoSet SET name = ?, setNumber = ?, theme = ?, pieces = ?, price = ?, releaseYear = ?, availability = ? WHERE id = ?",
    [name, setNumber, theme, pieces, price, releaseYear, availability, id]
  );
}

/**
 * Delete a Lego set by ID.
 * @param {number} setNumber - The ID of the Lego set to delete.
 */
async function deleteLegoSet(id) {
  await connect.query("DELETE FROM LegoSet WHERE setNumber = ?", [setNumber]);
}

// Export query functions for use in controllers
export default {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
  updateLegoSet,
  deleteLegoSet,
};
