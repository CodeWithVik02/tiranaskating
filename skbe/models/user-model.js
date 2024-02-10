const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  paid: false ,
  photo: {
    type: String 
  },
  googleId: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
