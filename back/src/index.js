const express = require("express");
const wss = require("./WebSocketServer");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const mockMessages = [
  { id: 1, username: "John", text: "Hello!" },
  { id: 2, username: "Jane", text: "Hi!" },
  { id: 3, username: "John", text: "How are you?" },
];

app.get("/messages", (req, res) => {
  res.json(mockMessages);
});

app.post("/new-message", (req, res) => {
  const { username, text } = req.body;
  const newMessage = { id: mockMessages.length + 1, username, text };
  mockMessages.push(newMessage);
  res.json(newMessage);
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(newMessage));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
