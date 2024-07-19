const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    image: { type: String, required: true },  
}, {
    versionKey: false
});

const TestimonialModel = mongoose.model("testimonial", testimonialSchema);

module.exports = {
    TestimonialModel
};
