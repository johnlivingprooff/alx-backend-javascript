const http = require('http');
const fs = require('fs');

async function countStudents(path) {
  let output = '';
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
    output += `Number of students: ${totalStudents}\n`;

    for (const field in fieldCounts) {
      if (fieldCounts !== null) {
        output += `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}\n`;
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }

  return output;
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const data = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${data}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
