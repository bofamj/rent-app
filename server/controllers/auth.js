const User = require("../models/user");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(200).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};
const login = (req, res) => {
  try {
    res.status(200).send("you login");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  register,
  login,
};
