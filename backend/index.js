// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Set up middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB (replace 'your-mongodb-connection-string' with your actual MongoDB connection string)
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Reintegration Program Backend!');
});

// Start the Express server on a specified port (replace 3000 with your desired port number)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

