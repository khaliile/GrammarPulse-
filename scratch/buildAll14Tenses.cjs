const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'data', 'tensesRegistry.js');

console.log("Generating full 14 tenses curriculum registry...");

// We will write out a complete, clean, rich ES module
