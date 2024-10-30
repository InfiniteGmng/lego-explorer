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

  // Validation: Check if a Lego set with the same ID already exists
  const existingLegoSet = legoSets.find((set) => set.id === newLegoSet.id);
  if (existingLegoSet)
    return res.status(400).json({ error: "Lego set ID already exists" });

  legoSets.push(newLegoSet);
  res.status(201).json(newLegoSet);
};

module.exports = {
  getAllLegoSets,
  getLegoSetById,
  addLegoSet,
};
