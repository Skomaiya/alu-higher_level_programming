#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    const todos = JSON.parse(body);
