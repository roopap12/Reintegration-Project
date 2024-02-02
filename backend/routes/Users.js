const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');  // Import your authentication middleware
const User = require('../models/User');  // Import your User model
const { hashPassword, isAdmin } = require('../middlewares/auth');

// Route for new user registration
router.post('/', hashPassword, async (req, res) => {
  try {
     const newUser = new User(req.body);
     const savedUser = await newUser.save();
     res.json(savedUser);
  } catch (error) {
     res.status(500).json({ message: 'Error creating user', error: error.message });
  }
 });

// Route for user login
router.post('/login', auth.authenticateUser, (req, res) => {
  // Return the JWT token to the client
  res.json({ token: req.token });
});


// Route to get all users (requires authentication)
router.get('/', auth.isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error: error.message });
  }
});

// Route to update users (requires authentication)
router.put('/update/:userId', isAdmin, async (req, res) => {
  console.log('Received a PUT request');
  try {
    const { username, password, role } = req.body;
    // Find the user to update
    const userIdToUpdate = req.params.userId;
    const userToUpdate = await User.findById(userIdToUpdate);
    // Check if the user to update exists
    if (!userToUpdate) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Update user information
    userToUpdate.username = username || userToUpdate.username;
    // If a new password is provided, hash and update it
    if (password) {
      const saltRounds = 10;
      userToUpdate.password = await bcrypt.hash(password, saltRounds);
    }
    // If a new role is provided, update it
    if (role) {
      // Validate the role against the allowed values
      const allowedRoles = ['user', 'admin', 'probation_officer', 'counselor', 'vocational_trainer'];
      if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }
      userToUpdate.role = role;
    }
    // Save the updated user
    await userToUpdate.save();
    res.status(200).json({ message: 'User updated successfully' });
 } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User update failed', error: error.message });
 }
});

// Route to delete users (requires authentication)
router.delete('/delete/:userId', isAdmin, async (req, res) => {
  try {
      const userIdToDelete = req.params.userId;
      const result = await User.deleteOne({ _id: userIdToDelete });
 
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
 
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'User deletion failed', error: error.message });
  }
 });


module.exports = router;
