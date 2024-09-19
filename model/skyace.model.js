const mongoose = require('mongoose');

// Define the schema for properties (features)
const PropertySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

// Define the main schema for Skyace
const SkyaceSchema = mongoose.Schema({
  title: {
    type: String
  },
  title2: {
    type: String
  },
  backgroundImage: {
    type: String
  },
  heading: {
    type: String
  },
  // brochure: {
  //   type: String
  // },
  info: {
    para: {
      type: String
    },
    properties: [PropertySchema] // Use PropertySchema for properties
  },
  images: {
    type: [String] // Array of image URLs
  }
});

// Create the model from the schema
const SkyaceModel = mongoose.model("Skyace", SkyaceSchema);

module.exports = {
  SkyaceModel
};
