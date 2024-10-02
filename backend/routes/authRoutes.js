const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validators = require('../validators');
const { body } = require('express-validator');


router.post('/register',[
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .normalizeEmail(),
  body(
    'password',
    'Please enter a password of at least 5 characters.'
  )
  .isLength({ min: 5 })
  .trim(),
  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
], authController.registerUser);

router.post('/login',validators.loginValidator,authController.loginUser);


module.exports = router;


