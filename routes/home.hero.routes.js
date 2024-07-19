const express = require("express")
const { handleCreateHome, handleGetHome, handleUpdateHome } = require("../controller/home.hero.controller")
 
 const HomeHeroRouter = express.Router()

HomeHeroRouter.post("/create", handleCreateHome)
HomeHeroRouter.get("/", handleGetHome)
HomeHeroRouter.patch("/update/:id", handleUpdateHome)

 module.exports = {
    HomeHeroRouter
 } 