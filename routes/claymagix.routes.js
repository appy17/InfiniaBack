const express = require("express");
const ClaymagixRouter = express.Router();

const {
  handleCreateClaymagix,
  handleGetClaymagix,
  handleUpdateClaymagix,
} = require("../controller/claymagix.controller");

// Route definitions
ClaymagixRouter.patch("/update/:id", handleUpdateClaymagix);
ClaymagixRouter.post("/create", handleCreateClaymagix);
ClaymagixRouter.get("/", handleGetClaymagix);

module.exports = { ClaymagixRouter };  
