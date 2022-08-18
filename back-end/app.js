// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const snackController = require('./controllers/snackController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/snacks', snackController);
app.use('/', (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
}); //look for the basic route in snackController

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// EXPORT
module.exports = app;
