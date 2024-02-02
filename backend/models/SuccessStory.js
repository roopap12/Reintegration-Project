// SuccessStory model with fields for the name of the individual, their success story,
// the date of the success, and an optional field for the image path 
// (assuming you want to store an image related to each success story).
const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  story: { type: String, required: true },
  date: { type: Date, default: Date.now },
  imagePath: { type: String },
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

module.exports = SuccessStory;

