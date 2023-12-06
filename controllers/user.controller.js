const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const user = await User.register(name, email, password, address);
  } catch (error) {}
};

const loginUser = async (req, res) => {};

module.exports = {
  createUser,
  loginUser,
};
