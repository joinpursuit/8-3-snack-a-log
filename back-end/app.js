// DEPENDENCIES


const cors = require("cors");
const express = require("express");
const snackController = require("./controllers/snackController.js");




// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.get("*", (req, res) => {
  res.status(404).send("404: Not Found");
});

// EXPORT
module.exports = app;
