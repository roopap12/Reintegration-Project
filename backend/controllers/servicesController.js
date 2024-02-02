// Each controller will handle the logic for interacting with the database based on the corresponding model.
// These controllers cover the basic CRUD (Create, Read, Update, Delete) operations for the services model.
const Services = require('../models/Service');

// Controller to get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a specific service by title
exports.getServiceByTitle = async (req, res) => {
  const title = req.params.title;

  try {
    const service = await Services.findOne({ title });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createService = async (req, res) => {
    const serviceData = req.body;
  
    try {
      const newService = await Services.create(serviceData);
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller to update an existing service by title
  exports.updateService = async (req, res) => {
    const title = req.params.title;
    const updatedServiceData = req.body;
  
    try {
      const updatedService = await Services.findOneAndUpdate({ title }, updatedServiceData, { new: true });
      if (!updatedService) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(updatedService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller to delete a service by title
  exports.deleteService = async (req, res) => {
    const title = req.params.title;
  
    try {
      const deletedService = await Services.findOneAndDelete({ title });
      if (!deletedService) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(deletedService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Add more controllers as needed
