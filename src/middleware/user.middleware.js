const Joi = require('joi');

const validateLogin = (req, _res, next) => {
  const data = req.body;
  const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const { error } = schema.validate(data);

if (error) throw error;

next();
};

module.exports = { validateLogin };