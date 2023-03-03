//import functions from node.js
const fs = require('fs');
const request = require('request');
const readline = require('readline');

//aquire info from from cmd line
const url = process.argv[2];
const filePath = process.argv[3];

//make a request to the url
request(url, (error, response, body) => {
    if (error) {
        //log an error
        console.error(`Error: ${error}`)
    } else if  (response.statusCode !== 200) {
        console.error(`Status code: ${response.statusCode}`)
    }
})