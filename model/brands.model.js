const mongoose = require('mongoose');

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
  features: [
    {
      name: {
        type: String,
        required: true,
      },
      descriptions: [String],
    },
  ],
  images: [
    {
      src: {
        type: String,
        required: true,
      }
    },
  ],
});

const BrandsModel = mongoose.model('brands', brandsSchema);

module.exports = {
    BrandsModel
};
