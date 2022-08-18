const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSingleSnack } = require("../queries/snacks.js");

// GET ALL SNACKS
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({
      success: true,
      payload: allSnacks,
    });
  } else {
    res.status(500).json({ error: "Error 500: Internal Server Error" });
  }
});

// GET SINGLE SNACK
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;

  const snack = await getSingleSnack(id);

  if (snack.id) {
    res.status(200).json({
      success: true,
      payload: snack,
    });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// EXPORT
module.exports = snacks;
