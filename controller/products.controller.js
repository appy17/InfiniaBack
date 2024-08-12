const { ProductModel } = require("../model/products.model");
const mongoose = require("mongoose");

const handleCreateproduct = async (req, res) => {
  const data = req.body;
  console.log("Data ", data);
  try {
    const product = new ProductModel(data);
    await product.save();
    res
      .status(200)
      .json({ msg: "product added Successfully!!!", success: true });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error.message);
  }
};

const handleGetproduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res
      .status(200)
      .json({
        msg: "product get Successfully!!!",
        success: true,
        data: product,
      });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error.message);
  }
};

const handleUpdateProduct = async (req, res) => {

  const { id } = req.params;
  console.log("Frontend Data", req.body);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Invalid product ID format" });
  }

  try {
    const existingProduct = await ProductModel.findById(id);

    if (!existingProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    Object.keys(req.body).forEach((key) => {
      existingProduct[key] = req.body[key];
    });

    await existingProduct.save();

    console.log("Product updated successfully");
    res
      .status(200)
      .json({ msg: "Product updated successfully", success: true });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message });
  }
};

const handleGetProductById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Invalid product ID format" });
  }

  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json({
      msg: "Product fetched successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message });
  }
};


module.exports = {
  handleCreateproduct,
  handleGetproduct,
  handleUpdateProduct,
  handleGetProductById,
};
