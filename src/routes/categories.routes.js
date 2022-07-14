const express = require('express');
const middleware = require('../middleware/categories.middleware');

const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

router.post('/', middleware.validateCategoryPost, categoriesController.createCategory);
router.get('/', categoriesController.getAllCategories);

module.exports = router;