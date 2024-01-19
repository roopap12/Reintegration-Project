// models/ContactForm.js

const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  profilePicture: {
    type: String, // Assuming you store the path or URL to the profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    required: true,
  },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
