// Setup MongoDB
const { MongoClient } = require("mongodb");
const url = "mongodb://mongo:27017";
const client = new MongoClient(url);

async function main() {
  // Database Name
  await client.connect();
  return client.db("ChatApp");
}

module.exports = main;
