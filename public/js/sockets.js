

  $(function () {
    var socket = io();

    //SENDING
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    $('.btn-record').click(function(){
    	track = ee.emit("record");
    	socket.emit('recorded track', track);
    	console.log('pressed stop button', track);
    	// return false; 
    })

    //RECEIVING
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('recorded track', function(track){
    	console.log("receive working");
    	// track = playlist.tracks[0];
    	$('#playlist').append(ee.emit("record"));
    	console.log(track, "in the socket.on receiving thingy")
    });
  });










 