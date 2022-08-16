const express = require("express");
const snacks = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");

//Index
snacks.get("/", async (req, res) => {
  const allSnacks = await db.any("SELECT * FROM snacks");
  res.json(allSnacks);
});

module.exports = snacks;
