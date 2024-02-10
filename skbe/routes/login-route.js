const express = require('express');
const router = express.Router();
const User = require('../models/user-model')
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt') ;
const key = 'dsdcsc';
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await user.save();
      const token = jwt.sign({ userId: user._id ,  username: user.name}, key, { expiresIn: '1h' });
      console.log('Token created:', token);
      res.status(200).json({ message: 'Login successful', userId: user._id, token , userName: user.name });
      
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch ) {
         
  
          const token = jwt.sign({ userId: user._id  , username: user.name }, key, { expiresIn: '1h' });
         
          res.status(200).json({ message: 'Login successful', userId: user._id, token  , userName: user.name});
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error logging in:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  module.exports = router;