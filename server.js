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

var myFirebaseRef = new Firebase("https://cash-flow.firebaseio.com"); 

myFirebaseRef.set({
  title: "Hello World!",
  author: "Mayor of life",
  location: {
    city: "Lagos city",
    state: "Lagos state",
    street: "Funsho Alara street",
  }
});

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