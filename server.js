const express = require('express');
const app = express();

const PORT = 3000;

const server = app.listen(PORT);
const io = require('socket.io')(server);

// Declare public folder to be 'static'
app.use(express.static('public'));

// when a user is connected to the socket server
io.on('connection', newConnection);

function newConnection(socket){
  socket.on('message', function(data){
    io.emit('message', data);
    history.push(data);
    console.log(history);
  });
}