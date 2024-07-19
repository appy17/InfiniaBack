const mongoose = require("mongoose");

const aboutExpertiseSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },  
    description: { type: String, required: true },
   
}, {
    versionKey: false
});

const AboutExpertiseModel = mongoose.model("aboutExpertise", aboutExpertiseSchema);

module.exports = {
    AboutExpertiseModel
};
