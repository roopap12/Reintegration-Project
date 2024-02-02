const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const secretKey = process.env.JWT_SECRET_KEY;
const apiKey = process.env.API_KEY; 

const hashPassword = async (req, res, next) => {
 if (req.body.password) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    } catch (error) {
      return res.status(500).json({ message: 'Error hashing password' });
    }
 }
 next();
};

const generateToken = (user) => {
 const payload = {
    id: user._id,
    username: user.username,
    role: user.role,
 };

 return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const authenticateUser = async (req, res, next) => {
 // Check API Key first
 if (!req.headers['api-key'] || req.headers['api-key'] !== apiKey) {
    console.log('Invalid API Key');
    return res.status(401).json({ message: 'Invalid API key' });
 }

 const { username, password } = req.body;

 try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials - User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log('Is password match?', isPasswordMatch);

    if (!isPasswordMatch) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid credentials - Password mismatch' });
    }

    req.token = generateToken(user);
    req.user = user;
    next();
 } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ message: 'Error authenticating user' });
 }
};

const isAdmin = (req, res, next) => {
  if (req.headers['authorization']) {
     const token = req.headers['authorization'].split(' ')[1]; // Assuming Bearer token format
 
     try {
       const decoded = jwt.verify(token, secretKey);
       req.user = decoded;
       if (req.user.role === 'admin') {
         next();
       } else {
         res.status(403).json({ message: 'Permission denied' });
       }
     } catch (error) {
       res.status(401).json({ message: 'Invalid token' });
     }
  } else {
     res.status(401).json({ message: 'No token provided' });
  }
 };
 
 module.exports = { hashPassword, authenticateUser, isAdmin };
