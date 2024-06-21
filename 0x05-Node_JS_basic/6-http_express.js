const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle 404 - Keep this as the last route
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

// Start the server on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the Express application
module.exports = app;
