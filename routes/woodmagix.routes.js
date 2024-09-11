const express = require("express");
const router = express.Router();
const {
  createWoodmagix,
  getAllWoodmagix,
  getWoodmagixById,
  updateWoodmagix,
  deleteWoodmagix,
} = require("../controllers/woodmagixController");

// Routes for CRUD operations
router.post("/", createWoodmagix);
router.get("/", getAllWoodmagix);
router.get("/:id", getWoodmagixById);
router.put("/:id", updateWoodmagix); // You can also use PATCH if you prefer
router.delete("/:id", deleteWoodmagix);

module.exports = router;
