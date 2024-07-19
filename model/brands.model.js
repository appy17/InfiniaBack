const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: [String],
});

const brandsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: [featureSchema],
  images: [
    {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  ],
});

const BrandsModel = mongoose.model('brands', brandsSchema);

module.exports = {
    BrandsModel
};
