// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snackController);
// ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to SnackALog");
});

// EXPORT
module.exports = app;
