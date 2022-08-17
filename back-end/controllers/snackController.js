const express = require("express");
const snacks = express.Router();

const { getSnacks, getOneSnack } = require("../queries/snacks");

snacks.get("/", async (req, res) => {
  const snacksObj = await getSnacks();
  if (snacksObj) {
    res.json({ success: true, payload: snacksObj });
  } else {
    res.status(404).json("ERROR!!");
  }
});

//GET Individual
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getOneSnack(id);
  if (snack[0]) {
    res.status(200).json({ success: true, payload: snack[0] });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

//DElETE

module.exports = snacks;
