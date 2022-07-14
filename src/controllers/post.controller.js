const jwt = require('jsonwebtoken');
const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
  const { authorization } = req.headers;
  const { data } = jwt.verify(authorization, process.env.JWT_SECRET);
  console.log('DATA.ID -> ', data.id);
  const { title, content, categoryIds } = req.body;
  const result = await postService.createNewPost({ userId: data.id, title, content, categoryIds });
  console.log(result);
  return res.status(201).json(result);
};

module.exports = { createNewPost };
