// This middleware includes functions to hash passwords, 
// generate JWT tokens, authenticate users, and check for admin role. 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Replace 'your-secret-key' with a strong, unique secret key for JWT
const secretKey = process.env.JWT_SECRET_KEY;

// Middleware to hash the user's password before saving it
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

// Middleware to generate JWT token for authentication
const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username, // Include any other user information you want in the token
    role: user.role,
  };

  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Adjust the expiration time as needed
};

// Middleware to authenticate user credentials
const authenticateUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Implement your user retrieval logic from the database here
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.token = generateToken(user);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating user' });
  }
};

// Middleware to check if the user has admin role
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Permission denied' });
  }
};

module.exports = { hashPassword, authenticateUser, isAdmin };
