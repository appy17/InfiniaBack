const mongoose = require("mongoose");

const aboutlastSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },  
    description: { type: String, required: true },
   
}, {
    versionKey: false
});

const AboutlastModel = mongoose.model("aboutlast", aboutlastSchema);

module.exports = {
    AboutlastModel
};
