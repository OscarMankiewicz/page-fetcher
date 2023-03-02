//import functions from node.js
const fs = require('fs');
const request = require('request');
const readline = require('readline');

//aquire info from from cmd line
const url = process.argv[2];
const filePath = process.argv[3];