const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack } = require("../queries/snacks.js");
//TODO: Create functions to check validity of params

// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
snacks.post("/new", async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    res.json(snack);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = snacks;
