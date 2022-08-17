const express = require("express");
const snacks = express.Router();

const { getSnacks } = require("../queries/snacks");

snacks.get("/", async (req, res) => {
  const snacksObj = await getSnacks();
  if (snacksObj) {
<<<<<<< HEAD
    res.json({ payload: snacksObj });
=======
    res.json(snacksObj);
>>>>>>> main
  } else {
    res.status(404).json("ERROR!!");
  }
});

module.exports = snacks;
