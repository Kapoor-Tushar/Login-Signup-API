// This file will contain all the logic which will contain server creation.
// Importing required modules.
const http = require("http");
const app = require("./app");

// Adding dotenv to access credintials from config file.
const dotenv = require("dotenv");
dotenv.config({
  path: `./config.env`,
});

// Connecting to mongodb
const mongoose = require("mongoose");
// Connecting our databse
const DB = process.env.DATABASE;
mongoose.connect(DB).then(function (connect) {
  // console.log(connect.connections);
  console.log("DB connection successful");
});

// Declaring port
const port = 7000;
// Creating Server
const server = http.createServer(app);
// Listening to the server
server.listen(port);
