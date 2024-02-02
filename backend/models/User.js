const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'probation_officer', 'counselor', 'vocational_trainer'], default: 'user' },
  // Add other fields as needed (e.g., email, name, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
