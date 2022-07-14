const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService.createUser({ displayName, email, password, image });
  res.status(201).json(result);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.userLogin({ email, password });
  res.status(200).json(result);
};

module.exports = { createUser, userLogin };
