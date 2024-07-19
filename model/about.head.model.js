const mongoose = require("mongoose");

const aboutHeadSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },  
    infinia: { type: String, required: true },
    description: { type: String, required: true },
   
}, {
    versionKey: false
});

const AboutHeadModel = mongoose.model("abouthead", aboutHeadSchema);

module.exports = {
    AboutHeadModel
};
