const mongoose = require("mongoose");

const CarousalSchema = mongoose.Schema(
     {
       imgSrc: {type:String, required:true},
      
     },
     {
       versionKey: false,
     }
   );
   
   const CarousalModel = mongoose.model("carousal", CarousalSchema);
   
   module.exports = {
     CarousalModel
   };
   