const express = require("express")
const { handleCreateEcomagix, handleGetEcomagix, handleUpdateEcomagix } = require("../controller/ecomagix.controller")

 const EcomagixRouter = express.Router()

 EcomagixRouter.post("/create", handleCreateEcomagix)
 EcomagixRouter.get("/", handleGetEcomagix)
 EcomagixRouter.patch("/update/:id", handleUpdateEcomagix)

 module.exports = {
    EcomagixRouter
 } 