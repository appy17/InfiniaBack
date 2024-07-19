const express = require("express")
const { handleCreateproduct, handleGetproduct, handleUpdateproduct } = require("../controller/products.controller")

 const ProductRouter = express.Router()

 ProductRouter.post("/create", handleCreateproduct)
 ProductRouter.get("/", handleGetproduct)
 ProductRouter.patch("/update/:id", handleUpdateproduct)

 module.exports = {
    ProductRouter
 } 