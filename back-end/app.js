// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const snackController = require("./controllers/snackController");
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
  res.send("Get Snack'n at Snack-a-log!");
=======
  res.send("Welcome to Snack-a-Log");
>>>>>>> main
});

// EXPORT
module.exports = app;
