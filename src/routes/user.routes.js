const express = require('express');
const userMiddleware = require('../middleware/user.middleware');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userMiddleware.signUpValidation, userController.createUser);
router.get('/', userMiddleware.validateToken, userController.getAllUsers);

module.exports = router;