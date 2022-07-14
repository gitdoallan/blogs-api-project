const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesService.createCategory(name);
  res.status(201).json(result);
};

module.exports = { createCategory };
