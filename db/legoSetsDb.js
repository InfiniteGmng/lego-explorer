import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables for DB configuration
dotenv.config({ path: "./config.env" });

// Destructure environment variables
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

// Check if environment variables are set
if (!DB_HOST || !DB_PORT || !DB_DATABASE || !DB_USER || !DB_PASSWORD) {
  console.error("Missing database configuration in environment variables.");
  process.exit(1); // Exit the process if any config is missing
}

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
  console.log(`Connected to MySQL on ${DB_HOST}:${DB_PORT}`);
} catch (error) {
  console.error("Failed to connect to MySQL:", error);
  process.exit(1); // Exit the process if connection fails
}

// Define database query functions
async function getAllLegoSets() {
  const [results] = await connect.query("SELECT * FROM lego_sets");
  return results;
}

async function getLegoSetById(id) {
  const [results] = await connect.query(
    "SELECT * FROM lego_sets WHERE id = ?",
    [id]
  );
  return results[0];
}

async function addLegoSet(legoSet) {
  const { id, name, theme, pieces, price } = legoSet; // Replace with actual columns
  await connect.query(
    "INSERT INTO lego_sets (id, name, theme, pieces, price) VALUES (?, ?, ?, ?, ?)",
    [id, name, theme, pieces, price]
  );
}

async function updateLegoSet(id, updatedData) {
  const { name, theme, pieces, price } = updatedData; // Replace with actual columns
  await connect.query(
    "UPDATE lego_sets SET name = ?, theme = ?, pieces = ?, price = ? WHERE id = ?",
    [name, theme, pieces, price, id]
  );
}

async function deleteLegoSet(id) {
  await connect.query("DELETE FROM lego_sets WHERE id = ?", [id]);
}

export default {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
  updateLegoSet,
  deleteLegoSet,
};
