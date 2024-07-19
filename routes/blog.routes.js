const express = require("express")
const { handleCreateblog, handleGetblog, handleUpdateblog } = require("../controller/blog.controller")

 const BlogRouter = express.Router()

 BlogRouter.post("/create", handleCreateblog)
 BlogRouter.get("/", handleGetblog)
 BlogRouter.patch("/update/:id", handleUpdateblog)

 module.exports = {
    BlogRouter
 } 