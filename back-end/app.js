// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController");

// CONFIGURATION
const app = express();
console.log(typeof snackController);

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
  console.log("Getting route /");
  res.send("Welcome to Snack-a-Log");
});

app.get("/", (req, res) => {
  res.send("Welcome to SnackALog");
});

// EXPORT
module.exports = app;
