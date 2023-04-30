import express from "express";
const app = express();

import { connect } from './config/database.js'

import service from './services/tweet-service.js'


app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("Connected");

  let ser = new service();
  await ser.createTweet({content:"This is my #tweet afetr #refacroring"});

});
