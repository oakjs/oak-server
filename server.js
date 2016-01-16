var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('action', function (action) {
    console.log("Got the action: " + action);
    action = JSON.parse(action);
    switch (action.type) {
      case 'message': 
        socket.emit('chat message', action.value);
        break;
      case 'announce': // no reason other than to remind myself.
        io.emit('chat message', action.value);
        break;
      default:
        socket.emit('chat message', "I can't hear you!");
    }
    // if (action.type == 'message') {
    //   io.emit('chat message', action.value);
    // }
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
