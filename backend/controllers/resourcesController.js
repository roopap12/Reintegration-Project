// This file provides controller functions for creating, retrieving, updating, and deleting resources. 

const Resource = require('../models/Resource');

// Controller to create a new resource
exports.createResource = async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all resources
exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a resource by ID
exports.updateResource = async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedResource) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a resource by ID
exports.deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json(deletedResource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
