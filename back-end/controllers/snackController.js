const express = require("express");
const snacks = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");
const {
  getSnack,
  deleteSnack,
  createSnack,
  updateSnack,
} = require("../queries/snacks");
const { checkImage, checkName } = require("../validations/checkSnacks");

//INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await db.any("SELECT * FROM snacks");
  res.json({ payload: allSnacks });
});

//SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.json({ success: true, payload: snack });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//CREATE
snacks.post("/", checkImage, checkName, async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    // if (!snack[0].image) {
    //   snack[0].image =
    //     "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    // }
    res.json({ success: true, payload: snack });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

// UPDATE
snacks.put("/:id", checkImage, checkName, async (req, res) => {
  try {
    const snack = await updateSnack(req.params.id, req.body);
    res.json({ success: true, payload: snack });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack) {
    if (deletedSnack.id) {
      res.status(200).json({ success: true, payload: deletedSnack });
    } else {
      res.status(404).json({ success: false, payload: "Snack not found" });
    }
  } else {
    console.error(deletedSnack);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = snacks;
