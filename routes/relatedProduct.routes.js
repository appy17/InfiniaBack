const express = require("express")
const { handleCreaterelatedproduct, handleGetrelatedproduct, handleUpdaterelatedproduct } = require("../controller/relatedProducr.controller")




 const RelatedProductorRouter = express.Router()

RelatedProductorRouter.post("/create", handleCreaterelatedproduct)
RelatedProductorRouter.get("/", handleGetrelatedproduct)
RelatedProductorRouter.patch("/update/:id", handleUpdaterelatedproduct)

 module.exports = {
 
     RelatedProductorRouter
 } 