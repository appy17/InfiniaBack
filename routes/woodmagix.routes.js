const express = require("express");
const { handlecreateWoodmagix, handleGetAllWoodmagix, handleUpdateWoodmagix, handleDeleteWoodmagix } = require("../controller/woodmagix.controller");
const WoodmagixRouter = express.Router();


WoodmagixRouter.post("/create",handlecreateWoodmagix);
WoodmagixRouter.get("/",handleGetAllWoodmagix);
WoodmagixRouter.patch("/update/:id",handleUpdateWoodmagix);
WoodmagixRouter.delete("/:id",handleDeleteWoodmagix)
module.exports = {WoodmagixRouter};