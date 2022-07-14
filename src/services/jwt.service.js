require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const { id, email, displayName, image } = user;
  const newUser = { id, email, displayName, image };
    const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, {
      expiresIn: '24h',
      algorithm: 'HS256',
    });

    return token;
};

const validateToken = (token) => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (_err) {
      const error = new Error('Invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
};

module.exports = { createToken, validateToken };