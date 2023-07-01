const { WebSocketServer } = require("ws");

// Initialize the WebSocket server instance
const wss = new WebSocketServer({ port: 8080 });

// Logs in console when a client connects
wss.on("connection", function connection(ws) {
  console.log("connected");
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.on("close", function close() {
    console.log("disconnected");
  });
});

module.exports = wss;
