var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var commandIndex = 1;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('command', function (command) {
    console.log("Got the command: " + command);
    command = JSON.parse(command);
    switch (command.type) {
      case 'message': 
        socket.emit('command', JSON.stringify({index: commandIndex++, replyTo: command.index, type: 'message', value: command.value}));
        break;

      default:
        socket.emit('message', "I can't hear you!");
    }
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
