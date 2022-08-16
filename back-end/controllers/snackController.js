const express = require("express");
const { all } = require("../app");
const snacks = express.Router();
const { getAllSnacks } = require("../queries/snacks.js");

// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = snacks;
