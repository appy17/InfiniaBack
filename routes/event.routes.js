const express = require("express")
const {
  handleCreateevent,
  handleGetevent,
  handleUpdateevent,
} = require("../controller/event.controller");

 const EventRouter = express.Router()

 EventRouter.post("/create", handleCreateevent);
 EventRouter.get("/", handleGetevent);
 EventRouter.patch("/update/:id", handleUpdateevent);

 module.exports = {
    EventRouter
 } 