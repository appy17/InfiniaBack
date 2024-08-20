const express = require("express");
const { handleCreatecarousal, handleGetcarousal } = require("../controller/carousal.controller");


 const CarousalRouter = express.Router()

 CarousalRouter.post("/create", handleCreatecarousal);
 CarousalRouter.get("/",handleGetcarousal);
 CarousalRouter.patch("/update/:id",);

 module.exports = {
     CarousalRouter
 } 