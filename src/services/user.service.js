const { User } = require('../database/models');
const jwtService = require('./jwt.service');

const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const userLogin = async (body) => {
  const user = await User.findOne({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  
  if (!user) {
    const error = Error('Invalid fields');
    error.name = 'ValidationError';
    throw error;
  }
  
  const token = jwtService.createToken(user);

  return { token };
};

module.exports = { getAllUsers, userLogin };
