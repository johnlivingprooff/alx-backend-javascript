const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to log server start message
app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT}`);
});

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;
