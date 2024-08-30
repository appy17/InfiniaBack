const mongoose = require("mongoose");

const RelatedProductSchema = mongoose.Schema({
    title: { type: String, required: true },
    href: { type: String, required: true },
    image: { type: String, required: true }
    
   
}, {
    versionKey: false
});

const RelatedProductModel = mongoose.model("relatedProduct", RelatedProductSchema);

module.exports = {
     RelatedProductModel
};