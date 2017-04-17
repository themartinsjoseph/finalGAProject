//REQUIRES AND GLOBAL VARS
var express = require('express');
var bodyParser = require('body-parser');
require("dotenv").config();
var path = require('path');

var app = express();

// MONGOOSE MODELS & CONNECTION
var mongoose = require('mongoose');
var Tracks = require('./models/tracks');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Project3');

//USE & SET STATEMENTS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));

//ROUTERS
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

//CONTROLLERS
app.use('/api/tracks', require('./controllers/tracks'));

//LISTENERS 
var server = app.listen(process.env.PORT || 3000);
module.exports = server;