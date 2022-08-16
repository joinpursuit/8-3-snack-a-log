// DEPENDENCIES

const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE

// ROUTES
//basic root route
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

// EXPORT
module.exports = app;
