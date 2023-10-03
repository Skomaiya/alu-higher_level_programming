#!/usr/bin/node
const fs = require('fs');

const readAndPrintFile = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`An error occurred: ${err.message}`);
    } else {
      console.log(data);
    }
  });
};

if (process.argv.length !== 3) {
  console.error('Usage: node readFile.js <file_path>');
} else {
  const filePath = process.argv[2];
  readAndPrintFile(filePath);
}
