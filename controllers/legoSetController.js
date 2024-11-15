import legoSetsDb from "../db/legoSetsDb.js";

// Retrieve all Lego sets
export const getAllLegoSets = async (req, res) => {
  try {
    const legoSets = await legoSetsDb.getAllLegoSets();
    res.json(legoSets);
  } catch (error) {
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
    res.status(500).json({ error: "Failed to retrieve Lego set" });
  }
};

// Add a new Lego set
export const addLegoSet = async (req, res) => {
  try {
    await legoSetsDb.addLegoSet(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: "Failed to add Lego set" });
  }
};

// Update an existing Lego set by ID
export const updateLegoSet = async (req, res) => {
  try {
    await legoSetsDb.updateLegoSet(req.params.id, req.body);
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Lego set" });
  }
};

// Delete a Lego set by ID
export const deleteLegoSet = async (req, res) => {
  try {
    await legoSetsDb.deleteLegoSet(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Lego set" });
  }
};
