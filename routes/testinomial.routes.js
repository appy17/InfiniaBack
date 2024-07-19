const express = require("express")
const { handleCreateTestimonial, handleGetTestimonial, handleUpdateTestimonial } = require("../controller/testimonial.controller")

 const TestimonialRouter = express.Router()

 TestimonialRouter.post("/create",handleCreateTestimonial)
 TestimonialRouter.get("/", handleGetTestimonial)
 TestimonialRouter.patch("/update/:id", handleUpdateTestimonial)

 module.exports = {
    TestimonialRouter
 } 