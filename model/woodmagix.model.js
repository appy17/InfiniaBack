const mongoose = require('mongoose');

const description = mongoose.Schema({
  heading: {
    type: String,
  },
  points: [
    {
      type: String,
    },
  ],
});

const woodmagixSchema = mongoose.Schema({
  bgimage: {
    type: String,
  },
  title: {
    type: String,
  },
  title2: {
    type: String,
  },
  para: {
    type: String,
  },
  info: description,
  images: [{ type: String }],
});

const WoodmagixModel = mongoose.model("woodmagix", woodmagixSchema);

module.exports = WoodmagixModel;