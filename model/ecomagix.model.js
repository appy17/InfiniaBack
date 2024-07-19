const mongoose = require('mongoose');

// Create a schema for the ecomagix list
const ecomagixSchema =  mongoose.Schema({
  images: {
    type: [String], // Array of strings for image URLs
    required: true
  },
  name: {
    type: String,
    required: true
  },
  points: {
    type: [String], // Array of strings for descriptions
    required: true
  }
}, { timestamps: true });

// Create the ecomagix model
const EcomagixModel = mongoose.model('ecomagix', ecomagixSchema);

module.exports = EcomagixModel;
