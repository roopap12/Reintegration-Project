const express = require('express');
const router = express.Router();
const SuccessStory = require('../models/SuccessStory');

// Get all success stories
router.get('/', async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.json(successStories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific success story
router.get('/:id', getSuccessStory, (req, res) => {
  res.json(res.successStory);
});

// Create a new success story
router.post('/', async (req, res) => {
  const successStory = new SuccessStory({
    name: req.body.name,
    story: req.body.story,
    imagePath: req.body.imagePath,
  });

  try {
    const newSuccessStory = await successStory.save();
    res.status(201).json(newSuccessStory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a success story
router.patch('/:id', getSuccessStory, async (req, res) => {
  if (req.body.name != null) {
    res.successStory.name = req.body.name;
  }
  if (req.body.story != null) {
    res.successStory.story = req.body.story;
  }
  if (req.body.imagePath != null) {
    res.successStory.imagePath = req.body.imagePath;
  }

  try {
    const updatedSuccessStory = await res.successStory.save();
    res.json(updatedSuccessStory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a success story
router.delete('/:id', getSuccessStory, async (req, res) => {
  try {
    await res.successStory.remove();
    res.json({ message: 'Deleted success story' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a specific success story by ID
async function getSuccessStory(req, res, next) {
  let successStory;
  try {
    successStory = await SuccessStory.findById(req.params.id);
    if (successStory == null) {
      return res.status(404).json({ message: 'Success story not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.successStory = successStory;
  next();
}

module.exports = router;
