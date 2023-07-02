const express = require("express");
const wss = require("./WebSocketServer");
const app = express();
const port = 3000;

const db = require("./db/mongo");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/messages", async (req, res) => {
  const connection = await db();
  const collection = connection.collection("messages");
  const messages = await collection.find({}).toArray();

  res.json(messages);
});

app.post("/new-message", async (req, res) => {
  const { username, text } = req.body;
  const newMessage = { username, text };

  const connection = await db();
  const collection = connection.collection("messages");
  const result = await collection.insertOne(newMessage);

  res.json(result);
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(result));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
