// Define the LegoSet model
const LegoSet = {
  name: "Millennium Falcon", // Name of the Lego set
  setNumber: "75257", // Unique identifier for each Lego set
  theme: "Star Wars", // Theme of the Lego set
  pieces: 1351, // Total number of pieces included in the set
  price: 159.99, // Retail price of the Lego set
  releaseYear: 2019, // Year the Lego set was released
  availability: true, // Indicates if the set is currently available
};

// Define the UserCollection model
const UserCollection = {
  username: "LegoFan123", // The user's display name
  email: "legofan123@example.com", // Contact email of the user
  setsOwned: ["75257", "60292", "76161"], // List of setNumbers representing the Lego sets owned by the user
  favoriteTheme: "Star Wars", // The user's most owned Lego theme
  totalPieces: 3000, // Total number of pieces owned by the user across all sets
};

// Exporting models for use in other parts of the application
module.exports = { LegoSet, UserCollection };
