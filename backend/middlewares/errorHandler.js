const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err);
  
    // Default error status and message
    let status = 500;
    let message = 'Internal Server Error';
  
    // Handle specific types of errors
    if (err.name === 'ValidationError') {
      // Handle Mongoose validation errors
      status = 400;
      message = err.message;
    } else if (err.name === 'UnauthorizedError') {
      // Handle JWT authentication errors
      status = 401;
      message = 'Unauthorized';
    }
  
    // Send the formatted error response to the client
    res.status(status).json({ error: message });
  };
  
  module.exports = errorHandler;
  