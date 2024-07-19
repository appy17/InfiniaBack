const express = require("express")
const { handleCreateAboutHead, handleGetAboutHead, handleUpdateAboutHead } = require("../controller/about.head.controller")

 const AboutHeadRouter = express.Router()

 AboutHeadRouter.post("/create", handleCreateAboutHead)
 AboutHeadRouter.get("/", handleGetAboutHead)
 AboutHeadRouter.patch("/update/:id", handleUpdateAboutHead)

 module.exports = {
    AboutHeadRouter
 } 