const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js CI/CD Demo!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    service: 'Node.js CI/CD Demo',
    timestamp: new Date().toISOString()
  });
});

app.get('/info', (req, res) => {
  res.json({
    name: 'Simple Node.js App',
    version: '1.0.0',
    description: 'CI/CD Demo Application',
    endpoints: ['/', '/health', '/info']
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

// Export both app and server for testing
module.exports = { app, server };

// For backward compatibility
module.exports.default = app;
