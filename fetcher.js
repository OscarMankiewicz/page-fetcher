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
        //log an error if not a 200 status
        console.error(`Status code: ${response.statusCode}`)
    } else {
        fs.writeFile(filePath, body, (error) => {
            if (error) {
                console.error(`Error writing file: ${error}`);
            } else {
                const fileSize = fs.statSync(filePath).size;
                console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
            }
        });
    }
});