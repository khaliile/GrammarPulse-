// Complete multi-tense dataset generator
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'data', 'tensesRegistry.js');

// We will export:
// - TENSES_METADATA (the 14 tenses metadata in chronological aspect order)
// - ALL_TENSES_DATA (dictionary containing full curriculum objects for each tense)
// - getTenseData(id) (helper function)
// - getNextTense(id)
// - getPrevTense(id)

console.log("Writing full tensesRegistry.js generator...");
