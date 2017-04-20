//REQUIRES AND GLOBAL VARS
var express = require('express');
var bodyParser = require('body-parser');
require("dotenv").config();
var path = require('path');
var WaveformPlaylist = require('waveform-playlist');
var rooms = [];

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

//io custom namespace
// var nsp = io.of('/track/:id');
// nsp.on('connection', function(socket){
// 	console.log('someone connected');
// });
// nsp.emit('hi', 'enveryone!')
// var trackRoom = '/track/:id'
//io room
// io.on('connection', function(socket){
// 	socket.join(trackRoom);
// 	io.in(trackRoom).emit("I'm not sure what to put here a string doesn't seem enough");
// })

// io.on('connection', function(socket){
// 	socket.on('groupConnect', function(group){
// 		var groupNsp = io.of('/track/' + group)
// 	})
// })

// var socketOut = io.connect('/track/' + tracks.id)










	// var roomKey = socket.handshake.headers.referer
	// roomKey = roomKey.substring(roomKey.length-15)
	// socket.on('get-users', function(){
	// 	var match = users.filter(funciton(value){
	// 		return value.room === roomKey;
	// 	})
	// 	io.sockets.in(roomKey).emit('all-users', match);
	// });



//LISTENERS 
// var server = app.listen(process.env.PORT || 3000);
// module.exports = server;

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
server.listen(process.env.PORT || 3000, function() {
  console.log("Cory in the House!!!");
});
module.exports = app;


