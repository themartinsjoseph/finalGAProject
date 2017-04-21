//REQUIRES AND GLOBAL VARS
var express = require('express');
var bodyParser = require('body-parser');
require("dotenv").config();
var path = require('path');
var WaveformPlaylist = require('waveform-playlist');

var app = express();

//Sockets
var server = require('http').Server(app);
var io = require('socket.io')(server);

// MONGOOSE MODELS & CONNECTION
var mongoose = require('mongoose');
var tracks = require('./models/track');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/finalProject');

//USE & SET STATEMENTS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));

//CONTROLLERS
app.use('/api/tracks', require('./controllers/tracks'));

//ROUTERS
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

//io chat function
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('recorded track', function(track){
  	io.emit('recorded track', track)
  });
});

server.listen(process.env.PORT || 3000, function() {
	console.log('connected to server');
});
module.exports = app;


