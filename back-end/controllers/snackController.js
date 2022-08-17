const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks.js");

const {
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
  formatName,
} = require("../validations/checkSnacks");

// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.status(200).json({ success: true, payload: snack });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// CREATE
snacks.post(
  "/",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const snack = await createSnack(req.body);
      snack[0].name = formatName(snack[0].name);
      if (!snack[0].image) {
        snack[0].image =
          "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
      }
      res.json({ success: true, payload: snack[0] });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

// UPDATE
snacks.put(
  "/:id",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const snack = await updateSnack(req.params.id, req.body);
      res.json({ success: true, payload: snack });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }
);

// DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack) {
    if (deletedSnack.id) {
      res.status(200).json({ success: true, payload: deletedSnack });
    } else {
      res.status(404).json({ success: false, payload: deletedSnack });
    }
  } else {
    res.status(500).json({ success: false, payload: deletedSnack });
  }
});

module.exports = snacks;
