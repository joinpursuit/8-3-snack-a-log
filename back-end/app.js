const express = require('express');
const cors = require('cors');

const snacksController = require('./controllers/snackController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/snacks', snacksController);

app.get('/', (request, response) => {
  response.status(200).send("Get Snack'n at Snack-a-log!");
});
app.get('*', (request, response) => {
  response.status(404).send('Oops, something went wrong getting your snacks!');
});

module.exports = app;
