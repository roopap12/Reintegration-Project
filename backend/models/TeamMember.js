const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  bio: { type: String },
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;

