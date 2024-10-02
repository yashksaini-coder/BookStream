const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const generateToken = (id, email,name) => {
    return jwt.sign({ id,email,name }, process.env.JWT_SECRET, {expiresIn: '30d'});
};
  
exports.registerUser = async (req, res, next) => {
    const { name,email,password } = req.body;
    console.log(req.body);
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('Validation failed');
            error.status = 422;
            error.data = errors.array()[0].msg;
            throw error;
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
        const error = new Error('User already exists');
        error.status = 400;
        throw error;
        }

        const user = await User.create({name,email,password,});

        res.status(201).json({
            _id: user._id,
            userName:user.userName,
            name: user.name,
            email: user.email,
        });     
    }
    catch(error){
        next(error);
    }
};
  
  
exports.loginUser = async (req, res,next) => {
    const { email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.status = 422;
        error.data = errors.array()[0].msg;
        throw error;
      }
  
      const user = await User.findOne({ email });
      if (!user) {  
        const error = new Error('User not found');
        error.status = 401;
        throw error;
      }
  
      if (!(await user.matchPassword(password))) {
        const error = new Error('Invalid password');
        error.status = 401;
        throw error;
      }
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id, user.isVerified)
      });
    }
    catch(error) {
      next(error);
    }
};