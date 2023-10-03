#!/usr/bin/node
const request = require('request');

function displayStatusCode(url) {
  request.get(url, (error, response) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Status code:', response.statusCode);
    }
  });
}

const urlToRequest = 'https://alu-intranet.hbtn.io/status'; // Replace with the URL you want to request

displayStatusCode(urlToRequest);

