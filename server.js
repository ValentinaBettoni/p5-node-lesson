console.log("up and running");

// we are loading express in a variable
let express = require("express");

let app = express();

// defining a port number
// let port = process.env.PORT;

// questa è la variabile per heroku
let port = process.env.PORT || 3000;

// variable for running instances in our server
let server = app.listen(port);

console.log("server is running on http://localhost:" + port);

app.use(express.static("public"));

let serverSocket = require("socket.io");

// io = nome della variabile che ho creato per importare il server socket (fatto nella riga sopra)
let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);

  newSocket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);

    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
