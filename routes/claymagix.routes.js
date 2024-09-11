const express = require("express");
const claymagixRouter = express.Router();

const { Getclaymagix, Createclaymagix, Updateclaymagix } = require('../controller/claymagix.controller');

claymagixRouter.get("/getclaymagix", Getclaymagix);
claymagixRouter.post("/addclaymagix", Createclaymagix);
claymagixRouter.patch('/updateclamagix/:id', Updateclaymagix);
module.exports = {
  claymagixRouter
}

