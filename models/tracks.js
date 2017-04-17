var mongoose = require('mongoose');

var TracksSchema = new mongoose.Schema({
	trackTitle: String,
	projectTitle: String
});

module.exports = mongoose.model('Tracks', TracksSchema);