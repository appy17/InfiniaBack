// const mongoose = require("mongoose");

// // Sub-point schema
// const subPointSchema = new mongoose.Schema({
//   description: {
//     type: String
//   },
// });

// const pointSchema = new mongoose.Schema({
//   title: {
//     type: String

//   },
//   subPoints: [subPointSchema],
// });


// const descriptionSchema = new mongoose.Schema({
//   points: [pointSchema],
// });


// const woodmagixSchema = new mongoose.Schema({
//   bgimage: {
//     type: String,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   title2: {
//     type: String,
//   },
//   subpoints: [
//     {
//       type: String,
//     },
//   ],

//   para: descriptionSchema,
//   images: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
// });

// const WoodmagixModel = mongoose.model("woodmagix", woodmagixSchema);

// module.exports = { WoodmagixModel };




// const subPointSchema = new mongoose.Schema({
//   description: {
//     type: String
//   },
// }, { _id: false }); 



const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true 
  },
  points: [

    
  ]
});

const woodmagixSchema = new mongoose.Schema({
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
  subpoints: [
    {
      title: {
        type: String,
     
      },
    },
  ],
  images: [
    {
      type: String,
      required: true 
    }
  ]
});


const WoodmagixModel = mongoose.model("woodmagix", woodmagixSchema);

module.exports = {WoodmagixModel};
