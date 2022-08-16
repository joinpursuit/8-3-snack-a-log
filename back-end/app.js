// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const snacksController = require('./controllers/snackController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/snacks', snacksController);

// ROUTES
app.get('/', (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

// EXPORT
module.exports = app;
