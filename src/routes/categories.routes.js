const express = require('express');
const middleware = require('../middleware/categories.middleware');

const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

router.post('/', middleware.validateCategoryPost, categoriesController.createCategory);

module.exports = router;