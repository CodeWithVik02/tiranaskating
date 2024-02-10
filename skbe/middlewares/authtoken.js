const jwt = require('jsonwebtoken');
const key = 'dsdcsc';

const authenticateToken = async (req, res, next) => {
     
    const token = req.headers.authorization
    
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const a = token.split(' ');
    const b = a[1] 
  
    jwt.verify(b, key, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      
      req.user = { user };
      console.log('User:', req.user.userId);
      
      next();
    });
    console.log('Token:', b);
  };
  module.exports = {
    authenticateToken,
  };