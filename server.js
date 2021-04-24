  
var app = require('express')();
var http = require('http').createServer(app);
// server-side
const io = require("socket.io")(http, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket)=> {
      

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            console.log('data');
            
      })
       socket.on('clear', (data)=> {
            socket.broadcast.emit('clear', data);
            console.log('called')
            
      })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})