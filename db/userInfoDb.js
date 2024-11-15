import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

// Connect to the database
const connect = await mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
});

// Database query functions
async function getAllUserInfo() {
  const [results] = await connect.query("SELECT * FROM users");
  return results;
}

async function getUserInfoById(id) {
  const [results] = await connect.query("SELECT * FROM users WHERE id = ?", [
    id,
  ]);
  return results[0];
}

async function addUserInfo(user) {
  const { id, name, email, age } = user; // Update to match your database schema
  await connect.query(
    "INSERT INTO users (id, name, email, age) VALUES (?, ?, ?, ?)",
    [id, name, email, age]
  );
}

async function updateUserInfo(id, updatedData) {
  const { name, email, age } = updatedData; // Update fields as per schema
  await connect.query(
    "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?",
    [name, email, age, id]
  );
}

async function deleteUserInfo(id) {
  await connect.query("DELETE FROM users WHERE id = ?", [id]);
}

export default {
  getAllUserInfo,
  getUserInfoById,
  addUserInfo,
  updateUserInfo,
  deleteUserInfo,
};
