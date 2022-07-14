const express = require('express');
const middleware = require('../middleware/user.middleware');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', middleware.validateLogin, userController.userLogin);

module.exports = router;