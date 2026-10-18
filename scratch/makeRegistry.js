const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'src', 'data', 'tensesRegistry.js');

// We will construct the data file in clean JS
console.log("Writing makeRegistry.js...");
