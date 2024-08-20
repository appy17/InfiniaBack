const express = require("express");
const { handleCreatecarousal, handleGetcarousal, handleUpdateCarousal, handleDeleteCarousal } = require("../controller/carousal.controller");


 const CarousalRouter = express.Router()

 CarousalRouter.post("/create", handleCreatecarousal);
 CarousalRouter.get("/",handleGetcarousal);
 CarousalRouter.patch("/update/:id",handleUpdateCarousal);
 CarousalRouter.delete("/delete/:id",handleDeleteCarousal);


 module.exports = {
     CarousalRouter
 } 