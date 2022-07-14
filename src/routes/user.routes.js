const express = require('express');
const userMiddleware = require('../middleware/user.middleware');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userMiddleware.signUpValidation, userController.createUser);
router.use(userMiddleware.validateToken);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;