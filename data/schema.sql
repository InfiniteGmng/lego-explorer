CREATE DATABASE IF NOT EXISTS legos;

USE legos;

CREATE TABLE LegoSet (
  name VARCHAR(255),
  setNumber VARCHAR(50) PRIMARY KEY,
  theme VARCHAR(100),
  pieces INT,
  price DECIMAL(10, 2),
  releaseYear INT,
  availability BOOLEAN
);

CREATE TABLE UserInfo (
  username VARCHAR(50) PRIMARY KEY,
  email VARCHAR(255),
  setsOwned JSON,
  favoriteTheme VARCHAR(100),
  totalPieces INT
);
