//Requires & Vars
var mongoose = require('mongoose');

var TracksSchema = new mongoose.Schema({
	trackName: String,
	projectName: String
});

TracksSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      trackName: ret.trackName,
      projectName: ret.projectName

    };
    return returnJson;
  }
});

module.exports = mongoose.model('tracks', TracksSchema);
