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

// Route for GET /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Route handler for invalid routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = app;
