const express = require("express");
const snacks = express.Router();

const { getSnacks, createSnack } = require("../queries/snacks");

snacks.get("/", async (req, res) => {
  const snacksObj = await getSnacks();
  if (snacksObj) {
    res.json({ success: true, payload: snacksObj });
  } else {
    res.status(404).json("ERROR!!");
  }
});

snacks.post("/", async (req, res) => {
  const newSnack = await createSnack(req.body);
  res.status(200).json({ success: true, payload: newSnack[0] });
});

module.exports = snacks;
