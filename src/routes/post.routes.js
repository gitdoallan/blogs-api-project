const express = require('express');
const middleware = require('../middleware/post.middleware');

const router = express.Router();
const postController = require('../controllers/post.controller');

router.post('/', middleware.validatePost, postController.createNewPost);

module.exports = router;