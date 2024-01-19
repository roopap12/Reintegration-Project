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

// POST a new service (requires authentication)
router.post('/', auth, async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT/UPDATE a service by ID (requires authentication)
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(updatedService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE a service by ID (requires authentication)
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
