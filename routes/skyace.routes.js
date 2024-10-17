// const express = require("express");
// const { createSkyace, getSkyace } = require("../controller/skyace.controller");
// const SkyaceRouter = express.Router();

// SkyaceRouter.post("/create", createSkyace);

// SkyaceRouter.get("/", getSkyace);

// module.exports = {SkyaceRouter};


const express = require("express");
const { handleGetSkyace, handleCreateSkyace, handleUpdate } = require("../controller/skyace.controller");


const SkyaceRouter = express.Router();
SkyaceRouter.get("/", handleGetSkyace);
SkyaceRouter.post("/create", handleCreateSkyace);
SkyaceRouter.patch("/update/:id", handleUpdate);


module.exports = {SkyaceRouter}