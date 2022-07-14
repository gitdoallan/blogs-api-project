const { Category } = require('../database/models');

const createCategory = async (body) => {
  const checkIfCategoryExists = await Category.findOne({
    where: {
      name: body,
    },
  });

  if (checkIfCategoryExists) {
    const error = new Error('Category already exists');
    error.name = 'ConflictError';
    throw error;
  }
  
  const result = await Category.create({ name: body });
  const { id, name } = result.dataValues;
  return { id, name };
};

module.exports = { createCategory };
