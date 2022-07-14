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

module.exports = { createToken };