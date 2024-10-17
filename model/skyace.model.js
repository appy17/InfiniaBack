const mongoose = require('mongoose');


const PropertySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }

});


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
  info: [PropertySchema],
  features: [
    {
      title: {
        type: String,
      }
    }
  ],
  images: {
    type: [String] 
  }
});


const SkyaceModel = mongoose.model("Skyace", SkyaceSchema);

module.exports = {
  SkyaceModel
};


