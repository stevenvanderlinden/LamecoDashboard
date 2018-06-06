const express = require('express');

const app = express();

app.use(express.static('./public'));

const server = app.listen(3000);
io = require('socket.io').listen(server);

io.sockets.on('connection', function() {
  
});

console.log('Server running on port 3000...')
