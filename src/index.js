const express = require("express");
const app = express();

const connect = require("./config/database");

const TweetService = require("./services/tweet-service");

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("Connected");

});
