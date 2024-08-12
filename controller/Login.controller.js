const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { LoginModel } = require("../model/Login.model");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await LoginModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new LoginModel({
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const verifyUser = async (req, res) => {
  console.log('Credentials ', req.body);
  try {
    const { email, password } = req.body;
    let user = await LoginModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });  
      }
    );
  } catch (err) {
    console.error('Error ',err.message);
    res.status(500).send("Server error");
  }
};

const verifyToken = async (req, res) => {
  const { token } = req.body; 
  console.log('Token ', req.body);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    res.json({ valid: false });
  }
};



const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    let user = await LoginModel.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ msg: "Password updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  createUser,
  verifyUser,
  updateUser,
  verifyToken,
};
