require('dotenv/config');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const validateLogin = (req, _res, next) => {
  const data = req.body;
  const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const { error } = schema.validate(data);

if (error) {
  error.message = 'Some required fields are missing';
  throw error;
} 

next();
};

const signUpValidation = (req, _res, next) => {
  const data = req.body;
  const schema = Joi.object({
    displayName: Joi.string().required().min(8).message({
      'string.min': '"displayName" length must be at least 8 characters long',
      'string.required': '"displayName" name is required' }),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).message({
      'string.min': '"password" length must be at least 6 characters long',
      'string.required': '"password" is required' }),
    image: Joi.string().required(),
});

  const { error } = schema.validate(data);
  if (error) throw error;

  next();
};

const validateToken = (req, _res, next) => {
    const { authorization } = req.headers;
    const token = authorization;

    console.log('validateLoop!');

    if (!token) {
      const error = new Error('Token not found');
      error.name = 'UnauthorizedError';
      throw error;
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (_err) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  next();
};

module.exports = { validateLogin, signUpValidation, validateToken };