const express = require("express");
const {
  handleCreateproduct,
  handleGetproduct,
  handleUpdateProduct,
  handleGetProductById,
} = require("../controller/products.controller");

const ProductRouter = express.Router();

ProductRouter.post("/create", handleCreateproduct);
ProductRouter.get("/", handleGetproduct);
ProductRouter.get("/productid/:id", handleGetProductById);
ProductRouter.patch("/update/:id", handleUpdateProduct);

module.exports = {
  ProductRouter,
};
