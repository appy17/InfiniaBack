

const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true 
  },
  points: [
    {
      type: String  
    }
  ]
});

const claymagixSchema = new mongoose.Schema({
  bgimage: {
    type: String, 
  },
  title: {
    type: String,
    required: true  
  },
  title2: {
    type: String  
  },
  para: {
    type: String,
    required: true  
  },
  info: [descriptionSchema],  
  images: [
    {
      type: String,
      required: true 
    }
  ]
});


const ClaymagixModel = mongoose.model("Claymagix", claymagixSchema);

module.exports = ClaymagixModel;
