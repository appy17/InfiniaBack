const express = require("express");
const claymagixRouter = express.Router();

const {
  Getclaymagix,
  Updateclaymagix,
} = require("../controller/claymagix.controller");

claymagixRouter.get("/getclaymagix", Getclaymagix);
claymagixRouter.patch("/updateclaymagix/:id", Updateclaymagix); 

module.exports = {
  claymagixRouter,
};
