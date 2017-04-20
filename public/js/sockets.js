

  $(function () {
    var socket = io();

    //SENDING
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    $('.btn-stop').click(function(e){
    	track = playlist.tracks[0];
    	socket.emit('recorded track', track);
    	console.log('pressed stop button', track);
    })

    //RECEIVING
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('recorded track', function(track){
    	console.log("receive working");
    	// track = playlist.tracks[0];
    	$('#playlist').append('<div class="playlist">').append(track);
    	console.log(track, "in the socket.on receiving thingy")
    });
  });










 