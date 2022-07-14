const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  res.status(200).json(result);
};

const userLogin = async (req, res) => {
  const result = await userService.userLogin(req.body);
  res.status(200).json(result);
};

module.exports = { getAllUsers, userLogin };
