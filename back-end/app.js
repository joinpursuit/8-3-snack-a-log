// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors()); //allows cross origin reques
app.use(express.json()); //parse request body into json format

// ROUTES
//basic root route
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snackController);

// EXPORT
module.exports = app;
