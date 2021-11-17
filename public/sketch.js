let clientSocket = io();

clientSocket.on("connect", newConnection);

clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  stroke("DarkCyan");
  fill("CadetBlue");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  stroke("DarkMagenta");
  fill("DarkOrchid");
  circle(mouseX, mouseY, 10);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  // mouse è il nome, l'altro è il messaggip
  clientSocket.emit("mouse", message);
}
