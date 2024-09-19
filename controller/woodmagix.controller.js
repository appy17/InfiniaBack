const express = require("express");
const { WoodmagixModel } = require("../model/woodmagix.model");

const WoodmagixRouter = express.Router();

// Create a new document
const handlecreateWoodmagix = async (req, res) => {
  try {
    const woodmagix = new WoodmagixModel(req.body);
    const savedWoodmagix = await woodmagix.save();
    res.status(201).json(savedWoodmagix);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all documents
const handleGetAllWoodmagix = async (req, res) => {
  try {
    const woodmagixItems = await WoodmagixModel.find();
    res.status(200).json(woodmagixItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update document by ID
const handleUpdateWoodmagix = async (req, res) => {
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
const handleDeleteWoodmagix = async (req, res) => {
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

// Routes for CRUD operations
// WoodmagixRouter.post("/create", handlecreateWoodmagix);
// WoodmagixRouter.get("/", handleGetAllWoodmagix);
// WoodmagixRouter.patch("/update/:id", handleUpdateWoodmagix);
// WoodmagixRouter.delete("/:id", handleDeleteWoodmagix);

module.exports = { 
  handleGetAllWoodmagix,
  handleUpdateWoodmagix,
  handleDeleteWoodmagix,
  handlecreateWoodmagix
};
