const { User } = require('../database/models');
const jwtService = require('./jwt.service');

const createUser = async (body) => {
  const { email } = body;
  const checkIfEmailExists = await User.findOne({
    where: {
      email,
    },
  });

  if (checkIfEmailExists) {
    const error = new Error('User already registered');
    error.name = 'ConflictError';
    throw error;
  }

  const user = await User.create(body);
  const token = jwtService.createToken(user);

  return { token };
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

module.exports = { createUser, userLogin };
