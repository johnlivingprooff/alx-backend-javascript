const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

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

// Route for GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Route for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Route handler for invalid routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = app;
