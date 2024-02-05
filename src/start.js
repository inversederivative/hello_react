// Grab the execSync function from child_process built-in Node.js module
const { execSync } = require('child_process');

// Set HTTPS to true, and port to 3030
process.env.HTTPS = 'true';
process.env.PORT = '3030';


// Run the start command
execSync('react-scripts start', { stdio: 'inherit' });
