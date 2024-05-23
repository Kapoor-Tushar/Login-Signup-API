// This file will contain all the logic regarding express.
// Importing required modules
const express = require("express");
const userRouter = require("./api/routes/userRoutes");
const viewRouter = require("./api/routes/viewRoutes");

// Creating an instance of express application.
const app = express();

// Setting view engine
app.set("view engine", "ejs");

// Serving static files
// Static files include css, javaScript, img files. We are telling our express application to access these static files from public folder.
app.use(express.static(__dirname + "/public"));

//Implemnting a middleware will ensure that incoming data is of json type.
app.use(express.json());

// Using middlewar eto mount routes.
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);

// Exporting app
module.exports = app;
