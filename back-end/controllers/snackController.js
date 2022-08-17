const express = require("express");
const snacks = express.Router();
const { getAllSnacks } = require("../queries/snacks.js");

// GET ALL SNACKS
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({
      success: true,
      payload: allSnacks,
    });
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

// EXPORT
module.exports = snacks;
