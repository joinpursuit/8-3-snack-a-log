// DEPENDENCIES

const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE

// ROUTES
app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hello World");
});

// EXPORT
module.exports = app;
