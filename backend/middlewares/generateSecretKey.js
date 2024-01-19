// Import the built-in crypto module
const crypto = require('crypto');

// Generate a random secret key (32 bytes, hex-encoded)
const secretKey = crypto.randomBytes(32).toString('hex');

// Print the generated key
console.log('Generated Secret Key:', secretKey);
