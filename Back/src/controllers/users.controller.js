const { serviceRegister, serviceLogin } = require("../services/users.service");

const login = async (req, res) => {
  try {
    const user = await serviceLogin();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const newUser = await serviceRegister();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
};
