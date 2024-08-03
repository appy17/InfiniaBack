const express = require("express");

const {
  createUser,
  verifyUser,
  updateUser,
  verifyToken,
} = require("../controller/Login.controller");

const LoginRouter = express.Router();

LoginRouter.post("/create", createUser);
LoginRouter.post("/verify", verifyUser);
LoginRouter.post("/verifyToken", verifyToken);
LoginRouter.patch("/update/:id", updateUser);

module.exports = {
  LoginRouter,
};
