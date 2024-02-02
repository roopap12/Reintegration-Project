// This file provides controller functions for creating, retrieving, updating, and deleting success stories.

const SuccessStory = require('../models/SuccessStory');

// Controller to create a new success story
exports.createSuccessStory = async (req, res) => {
  try {
    const newSuccessStory = await SuccessStory.create(req.body);
    res.status(201).json(newSuccessStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all success stories
exports.getAllSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.status(200).json(successStories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a success story by ID
exports.getSuccessStoryById = async (req, res) => {
  try {
    const successStory = await SuccessStory.findById(req.params.id);
    if (!successStory) {
      res.status(404).json({ message: 'Success story not found' });
      return;
    }
    res.status(200).json(successStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a success story by ID
exports.updateSuccessStory = async (req, res) => {
  try {
    const updatedSuccessStory = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSuccessStory) {
      res.status(404).json({ message: 'Success story not found' });
      return;
    }
    res.status(200).json(updatedSuccessStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a success story by ID
exports.deleteSuccessStory = async (req, res) => {
  try {
    const deletedSuccessStory = await SuccessStory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedSuccessStory) {
      res.status(404).json({ message: 'Success story not found' });
      return;
    }
    res.status(200).json(deletedSuccessStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
