// This file provides controller functions for creating, retrieving, and deleting contact form submissions.

const ContactForm = require('../models/contactForm');

// Controller to create a new contact form submission
exports.createContactFormSubmission = async (req, res) => {
  try {
    const newSubmission = await ContactForm.create(req.body);
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all contact form submissions
exports.getAllContactFormSubmissions = async (req, res) => {
  try {
    const submissions = await ContactForm.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a contact form submission by ID
exports.getContactFormSubmissionById = async (req, res) => {
  try {
    const submission = await ContactForm.findById(req.params.id);
    if (!submission) {
      res.status(404).json({ message: 'Contact form submission not found' });
      return;
    }
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a contact form submission by ID
exports.deleteContactFormSubmission = async (req, res) => {
  try {
    const deletedSubmission = await ContactForm.findByIdAndDelete(req.params.id);
    if (!deletedSubmission) {
      res.status(404).json({ message: 'Contact form submission not found' });
      return;
    }
    res.status(200).json(deletedSubmission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
