const express = require("express")
const { handleCreateOffering, handleGetOffering, handleUpdateOffering } = require("../controller/offering.controller")

 const OfferingRouter = express.Router()

 OfferingRouter.post("/create", handleCreateOffering)
 OfferingRouter.get("/", handleGetOffering)
 OfferingRouter.patch("/update/:id", handleUpdateOffering)

 module.exports = {
    OfferingRouter
 } 