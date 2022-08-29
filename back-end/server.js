// DEPENDENCIES

const app = require('./app.js');
const express = require('express');
const cors = require('cors');
// CONFIGURATION
require('dotenv').config();

const PORT = process.env.PORT || 3333;

// LISTEN
app.use(cors());
app.listen(PORT, () => {
  console.log(`🥤 🍿 Snackin' on port ${PORT} 🥨 🌰 `);
});
