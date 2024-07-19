const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },  
    Date: { type: String, required: true, default: new Date },
   
}, {
    versionKey: false
});

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = {
    BlogModel
};
