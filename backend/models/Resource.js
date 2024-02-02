// Resources model with fields for the title, link, description, 
// service, and amount. The service field is used to associate a resource with a specific service.
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
  service: { type: String },
  amount: { type: String },
});

const Resources = mongoose.model('Resources', resourceSchema);

module.exports = Resources;

