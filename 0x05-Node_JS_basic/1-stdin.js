console.log('Welcome to Holberton School, what is your name?');

// Listen for data on the stdin stream
process.stdin.on('data', (data) => {
  // Convert the input buffer to a string and trim the newline
  const name = data.toString().trim();

  // Display the user's input
  console.log(`Your name is: ${name}`);

  // Close the stdin stream to signal end of input
  process.stdin.end();
});

// Listen for the 'end' event on the stdin stream
process.stdin.on('end', () => {
  // Display the closing message
  console.log('This important software is now closing');
  process.exit(0);
});
