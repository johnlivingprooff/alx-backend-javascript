// full_server/utils.js
const fs = require('fs').promises;
const csvParser = require('csv-parser');

/**
 * Reads the database asynchronously from the given file path.
 * Returns a promise that resolves to an object of arrays of first names per field.
 * @param {string} filePath - The path to the database CSV file.
 * @returns {Promise<Object>} - Promise resolving to an object of arrays of first names per field.
 */
async function readDatabase(filePath) {
  try {
    // Read the CSV file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');

    let csStudents = [];
    let sweStudents = [];

    // Parse CSV data
    return new Promise((resolve, reject) => {
      // Using csv-parser to parse CSV data
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => {
          if (row['Firstname'] && row['Field']) {
            if (row['Field'] === 'CS') {
              csStudents.push(row['Firstname']);
            } else if (row['Field'] === 'SWE') {
              sweStudents.push(row['Firstname']);
            }
          }
        })
        .on('end', () => {
          // Resolve with an object containing arrays of first names per field
          resolve({
            CS: csStudents,
            SWE: sweStudents
          });
        })
        .on('error', (error) => {
          reject(error); // Reject promise if there's an error reading or parsing the file
        });
    });
  } catch (error) {
    return Promise.reject(error); // Reject promise if readFile encounters an error
  }
}

module.exports = {
  readDatabase
};
