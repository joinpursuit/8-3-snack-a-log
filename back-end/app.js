//DEPENDENCIES
const cors = require('cors');
const express = require('express');

//IMPORT CONTROLLERS
const snackController = require('./controllers/snackController');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/snacks', snackController);

//ROUTES
app.get('/', (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

//Error 404 Route
app.get('*', (req, res) => {
  res.status(404).send('Something wrong! Page Not Found!');
});

// EXPORT
module.exports = app;
