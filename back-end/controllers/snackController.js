const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSingleSnack,
  deleteSnack,
  createSnack,
} = require("../queries/snacks.js");

const { stringFormatter } = require("../helpers/stringFormatter.js");
const confirmHealth = require("../confirmHealth.js");

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

// DELETE SNACK
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ success: true, payload: deletedSnack });
  } else {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

// CREATE SNACK
snacks.post("/", async (req, res) => {
  const { body } = req;
  body.is_healthy = confirmHealth(body);

  const createdSnack = await createSnack(body);

  if (createdSnack.id && !createdSnack.image) {
    res.status(200).json({
      success: true,
      payload: {
        id: createdSnack.id,
        name: stringFormatter(createdSnack.name),
        fiber: createdSnack.fiber,
        protein: createdSnack.protein,
        added_sugar: createdSnack.added_sugar,
        is_healthy: createdSnack.is_healthy,
        image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
      },
    });
    return;
  }
  if (createdSnack.id) {
    res.status(200).json({
      success: true,
      payload: {
        id: createdSnack.id,
        name: stringFormatter(createdSnack.name),
        fiber: createdSnack.fiber,
        protein: createdSnack.protein,
        added_sugar: createdSnack.added_sugar,
        is_healthy: createdSnack.is_healthy,
        image: createdSnack.image,
      },
    });
    return;
  }
  res.status(500).json({ error: "Snack creation error" });
});

// EXPORT
module.exports = snacks;
