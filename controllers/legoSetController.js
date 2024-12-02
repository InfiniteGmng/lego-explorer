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

// Retrieve a specific Lego set by setNumber
export const getLegoSetById = async (req, res) => {
  const { setNumber } = req.params;

  try {
    const legoSet = await legoSetsDb.getLegoSetById(setNumber);

    if (!legoSet)
      return res.status(404).json({ error: `Set '${setNumber}' not found` });

    res.json(legoSet);
  } catch (error) {
    console.error("Error fetching Lego set by setNumber:", error);
    res.status(500).json({ error: `Failed to retrieve set '${setNumber}'` });
  }
};

// Add a new Lego set
export const addLegoSet = async (req, res) => {
  const { setNumber, name, theme, pieces, price, releaseYear, availability } =
    req.body;

  // Validate the input data before proceeding
  if (
    setNumber === undefined ||
    !name ||
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

    res.status(201).json(req.body);
  } catch (error) {
    console.error("Error adding Lego set:", error);
    res.status(500).json({ error: "Failed to add Lego set" });
  }
};

// Update an existing Lego set by setNumber
export const updateLegoSet = async (req, res) => {
  const { setNumber } = req.params;

  try {
    console.log(`Updating set: ${setNumber}`);

    await legoSetsDb.updateLegoSet(setNumber, req.body);

    res.json(req.body);
  } catch (error) {
    console.error("Error updating Lego set:", error);
    res.status(500).json({ error: `Failed to update set '${setNumber}'` });
  }
};

// Delete a Lego set by setNumber
export const deleteLegoSet = async (req, res) => {
  const { setNumber } = req.params;

  try {
    console.log(`Deleting set: ${setNumber}`);

    // Pass the setNumber to the database function
    await legoSetsDb.deleteLegoSet(setNumber);

    res
      .status(200)
      .json({ message: `Set '${setNumber}' was successfully deleted.` });
  } catch (error) {
    console.error("Error deleting Lego set:", error);
    res.status(500).json({ error: `Failed to delete set '${setNumber}'` });
  }
};
