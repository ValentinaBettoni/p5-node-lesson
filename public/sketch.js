let clientSocket = io();

clientSocket.on("connect", newConnection);

clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("DarkOrange");
  circle(data.x, data, y, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  // mouse è il nome, l'altro è il messaggip
  clientSocket.emit("mouse", message);
}
