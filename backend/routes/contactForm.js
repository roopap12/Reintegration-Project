const express = require('express');
const router = express.Router();
const ContactForm = require('../models/contactForm');

// Get all contact forms
router.get('/', async (req, res) => {
  try {
    const contactForms = await ContactForm.find();
    res.json(contactForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific contact form
router.get('/:id', getContactForm, (req, res) => {
  res.json(res.contactForm);
});

// Create a new contact form
router.post('/', async (req, res) => {
  const contactForm = new ContactForm({
    name: req.body.name,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    password: req.body.password,
    dateOfBirth: req.body.dateOfBirth,
    profilePicture: req.body.profilePicture,
    role: req.body.role,
  });

  try {
    const newContactForm = await contactForm.save();
    res.status(201).json(newContactForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a contact form
router.patch('/:id', getContactForm, async (req, res) => {
  if (req.body.name != null) {
    res.contactForm.name = req.body.name;
  }
  if (req.body.email != null) {
    res.contactForm.email = req.body.email;
  }
  if (req.body.contactNumber != null) {
    res.contactForm.contactNumber = req.body.contactNumber;
  }
  if (req.body.password != null) {
    res.contactForm.password = req.body.password;
  }
  if (req.body.dateOfBirth != null) {
    res.contactForm.dateOfBirth = req.body.dateOfBirth;
  }
  if (req.body.profilePicture != null) {
    res.contactForm.profilePicture = req.body.profilePicture;
  }
  if (req.body.role != null) {
    res.contactForm.role = req.body.role;
  }

  try {
    const updatedContactForm = await res.contactForm.save();
    res.json(updatedContactForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a contact form
router.delete('/:id', getContactForm, async (req, res) => {
  try {
    await res.contactForm.remove();
    res.json({ message: 'Deleted contact form' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a specific contact form by ID
async function getContactForm(req, res, next) {
  let contactForm;
  try {
    contactForm = await ContactForm.findById(req.params.id);
    if (contactForm == null) {
      return res.status(404).json({ message: 'Contact form not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.contactForm = contactForm;
  next();
}

module.exports = router;
