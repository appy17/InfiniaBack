const express = require("express")
const { handleCreatebrands, handleGetbrands, handleUpdatebrands } = require("../controller/brands.controller")

 const BrandsRouter = express.Router()

 BrandsRouter.post("/create", handleCreatebrands)
 BrandsRouter.get("/", handleGetbrands)
 BrandsRouter.patch("/update/:id", handleUpdatebrands)

 module.exports = {
    BrandsRouter
 } 