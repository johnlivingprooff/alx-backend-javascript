const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 1245;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to set database file based on command-line argument
app.use((req, res, next) => {
  req.databaseFile = process.argv[2];
  next();
});

// Mounting the routes defined in index.js
app.use('/', indexRouter);

// Route handler for invalid routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

module.exports = app; // Export the Express app
