const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middlewares/auth');

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET a specific service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to create a new service (requires authentication and admin role) auth.authenticateUser and auth.isAdmin middleware to ensure that only authenticated users with the 'admin' role can perform 
router.post('/', auth.authenticateUser, auth.isAdmin, async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.json(savedService);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service' });
  }
});

// PUT/UPDATE a service by ID (requires authentication) auth.authenticateUser and auth.isAdmin middleware to ensure that only authenticated users with the 'admin' role can perform 
router.put('/:id', auth.authenticateUser, auth.isAdmin, async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error: error.message });
  }
});

// DELETE a service by ID (requires authentication)auth.authenticateUser and auth.isAdmin middleware to ensure that only authenticated users with the 'admin' role can perform 
router.delete('/:id', auth.authenticateUser, auth.isAdmin, async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error: error.message });
  }
});

module.exports = router;
