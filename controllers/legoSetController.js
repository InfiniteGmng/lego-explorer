const legoSets = require("../data/data.json").legoSets;

// Retrieve all Lego sets
const getAllLegoSets = (req, res) => {
  res.json(legoSets);
};

// Retrieve a specific Lego set by ID
const getLegoSetById = (req, res) => {
  const legoSet = legoSets.find((set) => set.id === req.params.id);
  if (!legoSet) return res.status(404).json({ error: "Lego set not found" });
  res.json(legoSet);
};

// Add a new Lego set
const addLegoSet = (req, res) => {
  const newLegoSet = req.body;

  // Check if a Lego set with the same ID already exists
  if (legoSets.find((set) => set.id === newLegoSet.id)) {
    return res.status(400).json({ error: "Lego set ID already exists" });
  }

  legoSets.push(newLegoSet);
  res.status(201).json(newLegoSet);
};

// Update an existing Lego set by ID
const updateLegoSet = (req, res) => {
  const { id } = req.params;
  const index = legoSets.findIndex((set) => set.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Lego set not found" });
  }

  // Replace old data with new data from request body
  legoSets[index] = { ...legoSets[index], ...req.body };
  res.json(legoSets[index]);
};

// Delete a Lego set by ID
const deleteLegoSet = (req, res) => {
  const { id } = req.params;
  const index = legoSets.findIndex((set) => set.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Lego set not found" });
  }

  // Remove the Lego set from the array
  legoSets.splice(index, 1);
  res.status(204).end();
};

module.exports = {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
  updateLegoSet,
  deleteLegoSet,
};
