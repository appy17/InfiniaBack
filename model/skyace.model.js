const mongoose = require('mongoose');

const details = mongoose.Schema({
  para: {
    type:String
  },
  properties: [
    {
      title: {
        type:String
      },
      description: {
        type:String
      }
    }
  ]
})

const skyaceSchema = mongoose.Schema({
  title: {
    type:String
  },
  backgroundImage: {
    type:String
  },
  heading: {
    type:String
  },
  brochure: {
    type:File
  },
  info:details,
  images: {
    type:[String]
  }
})

const SkyaceModel = mongoose.Model("skyace", skyaceSchema);
module.exports = {
  SkyaceModel
}