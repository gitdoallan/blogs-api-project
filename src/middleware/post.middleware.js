const Joi = require('joi');

const validatePost = (req, _res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    error.message = 'Some required fields are missing';
    throw error;
  }

  next();
};

module.exports = { validatePost };