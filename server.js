/**
 *
 * Server.js file
 *
 * App entry point
 *
*/

'use strict'

var express = require('express');
var app = express();
var Firebase = require('firebase');

var port = process.env.PORT || 5550;


app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile('./public/views/index.html');
});

app.listen(port, function(err) {
  if(err) {
    console.log("An error occured.. This app could not be started.");
  }
  else {
    console.log(port + " is where the magic happens..");
  }
});

exports = module.exports = app;