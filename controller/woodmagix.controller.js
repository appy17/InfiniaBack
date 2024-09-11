const WoodmagixModel = require("../models/woodmagixModel");

// Create a new document
const createWoodmagix = async (req, res) => {
  try {
    const woodmagix = new WoodmagixModel(req.body);
    const savedWoodmagix = await woodmagix.save();
    res.status(201).json(savedWoodmagix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all documents
const getAllWoodmagix = async (req, res) => {
  try {
    const woodmagixItems = await WoodmagixModel.find();
    res.status(200).json(woodmagixItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get document by ID
const getWoodmagixById = async (req, res) => {
  try {
    const woodmagix = await WoodmagixModel.findById(req.params.id);
    if (!woodmagix) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(woodmagix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update document by ID
const updateWoodmagix = async (req, res) => {
  try {
    const updatedWoodmagix = await WoodmagixModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedWoodmagix) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedWoodmagix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete document by ID
const deleteWoodmagix = async (req, res) => {
  try {
    const deletedWoodmagix = await WoodmagixModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedWoodmagix) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWoodmagix,
  getAllWoodmagix,
  getWoodmagixById,
  updateWoodmagix,
  deleteWoodmagix,
};
