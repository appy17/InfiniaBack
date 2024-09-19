const express = require("express");
const { createSkyace, updateSkyace, getSkyace } = require("../controller/skyace.controller");
const SkyaceRouter = express.Router();

SkyaceRouter.post("/create", createSkyace);

SkyaceRouter.patch("/update/:id", updateSkyace);

SkyaceRouter.get("/", getSkyace);


module.exports = {SkyaceRouter};
