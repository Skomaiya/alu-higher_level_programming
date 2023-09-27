#!/usr/bin/node
if (process.argv[2] === undefined) {
    // No argument passed
    console.log('No argument');
  } else {
    // Print the first argument
    console.log(process.argv[2]);
  }
