import legoSetsDb from "../db/legoSetsDb.js";

// Retrieve all Lego sets
export const getAllLegoSets = async (req, res) => {
  try {
    const legoSets = await legoSetsDb.getAllLegoSets();
    res.json(legoSets);
  } catch (error) {
    console.error("Error fetching Lego sets:", error);
    res.status(500).json({ error: "Failed to retrieve Lego sets" });
  }
};

// Retrieve a specific Lego set by ID
export const getLegoSetById = async (req, res) => {
  try {
    const legoSet = await legoSetsDb.getLegoSetById(req.params.id);
    if (!legoSet) return res.status(404).json({ error: "Lego set not found" });
    res.json(legoSet);
  } catch (error) {
    console.error("Error fetching Lego set by ID:", error);
    res.status(500).json({ error: "Failed to retrieve Lego set" });
  }
};

// Add a new Lego set
export const addLegoSet = async (req, res) => {
  const { name, setNumber, theme, pieces, price, releaseYear, availability } =
    req.body;

  // Validate the input data before proceeding
  if (
    !name ||
    !setNumber ||
    !theme ||
    !pieces ||
    !price ||
    !releaseYear ||
    availability === undefined
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Insert the Lego set into the database
    await legoSetsDb.addLegoSet(req.body);
    res.status(201).json(req.body); // Send the added Lego set back in the response
  } catch (error) {
    console.error("Error adding Lego set:", error);
    res.status(500).json({ error: "Failed to add Lego set" });
  }
};

// Update an existing Lego set by ID
export const updateLegoSet = async (req, res) => {
  try {
    await legoSetsDb.updateLegoSet(req.params.id, req.body);
    res.json(req.body); // Return the updated data
  } catch (error) {
    console.error("Error updating Lego set:", error);
    res.status(500).json({ error: "Failed to update Lego set" });
  }
};

// Delete a Lego set by ID
export const deleteLegoSet = async (req, res) => {
  const { setNumber } = req.params; // Get the setNumber from the request params

  try {
    console.log(`Deleting Lego set with setNumber: ${setNumber}`);

    // Pass the setNumber to the database function
    await legoSetsDb.deleteLegoSet(setNumber);

    res.status(204).end(); // Successfully deleted, no content to return
  } catch (error) {
    console.error("Error deleting Lego set:", error);
    res.status(500).json({ error: "Failed to delete Lego set" });
  }
};
