const express = require('express');
const router = express.Router();
const Resources = require('../models/Resource');

// Get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resources.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific resource
router.get('/:id', getResource, (req, res) => {
  res.json(res.resource);
});

// Create a new resource
router.post('/', async (req, res) => {
  const resource = new Resources({
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
    service: req.body.service,
    amount: req.body.amount,
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a resource
router.patch('/:id', getResource, async (req, res) => {
  if (req.body.title != null) {
    res.resource.title = req.body.title;
  }
  if (req.body.link != null) {
    res.resource.link = req.body.link;
  }
  if (req.body.description != null) {
    res.resource.description = req.body.description;
  }
  if (req.body.service != null) {
    res.resource.service = req.body.service;
  }
  if (req.body.amount != null) {
    res.resource.amount = req.body.amount;
  }

  try {
    const updatedResource = await res.resource.save();
    res.json(updatedResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a resource
router.delete('/:id', getResource, async (req, res) => {
  try {
    await res.resource.remove();
    res.json({ message: 'Deleted resource' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a specific resource by ID
async function getResource(req, res, next) {
  let resource;
  try {
    resource = await Resources.findById(req.params.id);
    if (resource == null) {
      return res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.resource = resource;
  next();
}

module.exports = router;
