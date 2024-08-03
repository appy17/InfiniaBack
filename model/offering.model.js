const mongoose = require("mongoose");

const offeringSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonColor: { type: String, required: true },
    images: [
        {
            url: { type: String, required: true },
            name:{type:String ,required:true },
        }
    ]
}, {
    versionKey: false
});

const OfferingModel = mongoose.model("offering", offeringSchema);

module.exports = {
    OfferingModel
};
