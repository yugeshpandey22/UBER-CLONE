const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

// POST /register
router.post('/register', [
  body('firstname')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long'),
  body('lastname')
    .isLength({ min: 3 })
    .withMessage('Last name must be at least 3 characters long'),
  body('email')
    .isEmail()
    .withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
], userController.registerUser);

// ✅ GET /users - fetch all users
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

module.exports = router;
