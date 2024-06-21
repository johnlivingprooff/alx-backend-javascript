const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const PORT = 1245;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for GET /students
app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  if (!databaseFile) {
    return res.status(500).send('Database file not provided');
  }

  let students = [];
  let csStudents = [];
  let sweStudents = [];

  // Read the CSV file
  fs.createReadStream(databaseFile)
    .pipe(csvParser())
    .on('data', (row) => {
      // Filter out empty lines
      if (row['Firstname'] && row['Field']) {
        students.push(row['Firstname']);
        if (row['Field'] === 'CS') {
          csStudents.push(row['Firstname']);
        } else if (row['Field'] === 'SWE') {
          sweStudents.push(row['Firstname']);
        }
      }
    })
    .on('end', () => {
      const response = `
        This is the list of our students
        Number of students: ${students.length}
        Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}
        Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}
      `;
      res.send(response);
    });
});

// Route handler for invalid routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

module.exports = app; // Export the Express app
