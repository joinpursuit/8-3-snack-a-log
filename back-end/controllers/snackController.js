const express = require("express");
const snack = express.Router();

const {
  getAllSnacks,
  getSnackByID,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks");

const { checkName, checkBoolean } = require("../validation/snackValidation");

snack.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  console.log("=== GET Snacks", allSnacks, "===");
  if (allSnacks) {
    res.status(200).json({ sucess: true, payload: allSnacks });
  } else {
    res.status(404).json({ sucess: false, message: "Cannot find any snacks" });
  }
});

snack.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getASnack = await getSnackByID(id);
  console.log("=== GET snack by ID", getASnack, "===");

  if (getASnack) {
    res.status(200).json({ sucess: true, payload: getASnack });
  } else {
    res
      .status(404)
      .json({ success: false, message: `No snack with this ID:${id} exists` });
  }
});

snack.post("/", checkName, checkBoolean, async (req, res) => {
  const newSnack = {
    name: req.body.name,
    fiber: req.body.fiber,
    protein: req.body.protein,
    addedSugar: req.body.added_sugar,
    isHealthy: req.body.is_healthy,
    image: req.body.image,
  };

  console.log("=== CREATE snack", newSnack, "===");

  const createdSnack = await createSnack(
    newSnack.name,
    newSnack.fiber,
    newSnack.protein,
    newSnack.addedSugar,
    newSnack.isHealthy,
    newSnack.image
  );

  if (createdSnack) {
    res.status(200).json({ success: true, payload: createdSnack });
  } else {
    res.status(404).json({ success: false, message: "Something went wrong." });
  }
});

snack.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;

  const updatedSnackData = {
    name: req.body.name,
    fiber: req.body.fiber,
    protein: req.body.protein,
    addedSugar: req.body.added_sugar,
    isHealthy: req.body.is_healthy,
    image: req.body.image,
  };

  console.log("=== UPDATE snack", updatedSnackData, "===");

  const updatedSnack = await updateSnack(
    id,
    updatedSnackData.name,
    updatedSnackData.fiber,
    updatedSnackData.protein,
    updatedSnackData.addedSugar,
    updatedSnackData.isHealthy,
    updatedSnackData.image
  );

  if (updatedSnack) {
    res.status(200).json({ success: true, payload: updatedSnack });
  } else {
    res.status(404).json({
      sucess: false,
      message: `Could not update the snack at the ID${id}.`,
    });
  }
});

snack.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);

  console.log("=== DELETE snack", deletedSnack, "===");
  if (deletedSnack) {
    res.status(200).json({ sucess: true, payload: deletedSnack });
  } else {
    res.status(404).json({
      sucess: false,
      message: `Could not delete a snack with that ID${id}`,
    });
  }
});

module.exports = snack;
