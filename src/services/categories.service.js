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

const getAllCategories = async () => {
  const categories = await Category.findAll({
    order: [
      ['id', 'ASC'],
    ],
    attributes: ['id', 'name'],
  });
  return categories;
};

module.exports = { createCategory, getAllCategories };
