const { BlogPost, Category, PostCategory } = require('../database/models');

const validateCategoryIds = async (categoryIds) => {
  const getAllCategoryIds = await Category.findAll({
    attributes: ['id'],
  });
  const allCategoryIds = getAllCategoryIds.map(({ dataValues: { id } }) => id);
  const idNotFound = categoryIds.some((categoryId) => !allCategoryIds.includes(categoryId));
  return idNotFound;
};

const createNewPost = async (body) => {
  const { title, content, userId, categoryIds } = body;
  const idNotFound = await validateCategoryIds(categoryIds);
  if (idNotFound) {
    const error = new Error('"categoryIds" not found');
    error.name = 'ValidationError';
    throw error; 
}
  const result = await BlogPost.create({ title, content, userId });
  await PostCategory.bulkCreate(categoryIds
    .map((categoryId) => ({ postId: result.id, categoryId })));
  return {
    id: result.id,
    title: result.title,
    content: result.content,
    userId: result.userId,
    updated: result.updatedAt,
    published: result.createdAt,
  };
};

module.exports = { createNewPost };