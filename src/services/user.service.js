const { User } = require('../database/models');

const getAllUsers = async () => {
  console.log('getAllUsersService');
  const result = await User.findAll();
  return result;
};

const userLogin = async (body) => {
  const result = await User.findOne({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  return result;
};

module.exports = { getAllUsers, userLogin };
