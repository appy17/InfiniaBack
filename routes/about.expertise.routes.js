const express = require("express")
const { handleCreateAboutExpertise, handleGetAboutExpertise, handleUpdateAboutExpertise } = require("../controller/about.expertise.controller")

 const AboutExpertiseRouter = express.Router()

 AboutExpertiseRouter.post("/create", handleCreateAboutExpertise)
 AboutExpertiseRouter.get("/", handleGetAboutExpertise)
 AboutExpertiseRouter.patch("/update/:id", handleUpdateAboutExpertise)

 module.exports = {
    AboutExpertiseRouter
 } 