const express = require("express")
const { handleCreateAboutLast, handleGetAboutLast, handleUpdateAboutLast } = require("../controller/about.last.controller")

 const AboutLastRouter = express.Router()

 AboutLastRouter.post("/create", handleCreateAboutLast)
 AboutLastRouter.get("/", handleGetAboutLast)
 AboutLastRouter.patch("/update/:id", handleUpdateAboutLast)

 module.exports = {
    AboutLastRouter
 } 