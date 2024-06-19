const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    const fieldIndex = headers.indexOf('field');
    if (!fieldIndex) {
      throw new Error('Cannot load the datatabase');
    }

    const fieldCounts = {};
    const fieldLists = {};

    for (const student of students) {
      const field = student[fieldIndex];
      const firstName = student[0];

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldLists[field] = [];
      }

      fieldCounts[field] += 1;
      fieldLists[field].push(firstName);
    }

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (fieldCounts !== null) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
