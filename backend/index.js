const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import the cors package

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import your route files
const servicesRoutes = require('./routes/services');
const teamMembersRoutes = require('./routes/teamMembers');
const successStoriesRoutes = require('./routes/successStories');
const resourcesRoutes = require('./routes/resources');
const contactFormRoutes = require('./routes/contactForm');

// Use your routes
app.use('/services', servicesRoutes);
app.use('/team-members', teamMembersRoutes);
app.use('/success-stories', successStoriesRoutes);
app.use('/resources', resourcesRoutes);
app.use('/contact-form', contactFormRoutes);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Reintegration Program Backend!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
