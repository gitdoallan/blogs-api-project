const Joi = require('joi');

const validateCategoryPost = (req, _res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    error.message = '"name" is required';
    throw error;
  }

  return next();
};

module.exports = { validateCategoryPost };