const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import the cors package
const errorHandler = require('./middlewares/errorHandler');  // Import the errorHandler middleware
const auth = require('./middlewares/auth');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Middleware to extract JWT token from Authorization header
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
     const token = authHeader.split(' ')[1];
     req.token = token;
  }
  next();
 });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  // The following options are no longer needed in the latest MongoDB driver
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

// Import your route files
const servicesRoutes = require('./routes/services');
const teamMembersRoutes = require('./routes/teamMembers');
const successStoriesRoutes = require('./routes/successStories');
const resourcesRoutes = require('./routes/resources');
const contactFormRoutes = require('./routes/ContactForm');
const UsersRoutes = require('./routes/Users');

// Use of routes Middleware
app.use('/services', servicesRoutes);
app.use('/team-members', teamMembersRoutes);
app.use('/success-stories', successStoriesRoutes);
app.use('/resources', resourcesRoutes);
app.use('/contact-form', contactFormRoutes);
app.use('/users', UsersRoutes);
app.use(errorHandler);

// Define a route to fetch all users
app.get('/', async (req, res) => {
  try {
     let dbResult = await User.find({});
     if (dbResult) {
       console.log(dbResult);
       res.json(dbResult);
     } else {
       res.status(500).json({ error: 'Error fetching users' });
     }
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
  }
 });

// Start Express Server:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
