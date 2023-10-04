#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node readFile.js <file_path>');
    process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
    if (error) {
        console.error('Error:', error.message);
      } else {
        console.log('code: ', response.statusCode);
      }
    });
