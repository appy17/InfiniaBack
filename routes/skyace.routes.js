const express = require("express");
const {
  createSkyace,
  updateSkyace,
  getSkyace,
} = require("../controllers/skyaceController");
const router = express.Router();

router.post("/skyace", createSkyace);

router.patch("/skyace", updateSkyace);

router.get("/skyace", getSkyace);


module.exports = router;
