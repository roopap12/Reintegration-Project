// In this schema:

// title is a required field, representing the title of the service.
// description is a required field, providing a description of the service.
// details is an array containing objects with field and value properties, representing specific details about the service.
// links is an array containing objects with name and url properties, representing relevant links associated with the service.
// This schema aligns with the structure of the JSON data you provided. It can be modify it further based on additional requirements or changes

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  details: [
    {
      field: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  links: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
