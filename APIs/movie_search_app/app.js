// var express = require("express");
// var app = express();
const request = require("request");

request('http://jasonplaceholder.typicode.com/users/1', function(error, response, body) {
    eval(require('locus'))
    if (!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body);
        console.log(parsedData);
    }
});
