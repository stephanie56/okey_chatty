const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const socketIo = require('socket.io');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded( {extend: false} ));

server.listen(3000);

// when a user is connected to the socket server
io.on('connection', newConnection);

function newConnection(socket){
  socket.on('message', function(data){
    io.emit('message', data);
  });
}
