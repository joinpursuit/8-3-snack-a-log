//DEPENDENCIES
const express = require("express");
const snacks = express.Router();
const confirmHealth = require("../confirmHealth");

const {
  getAllSnacks,
  getOneSnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks");

//Setup Basic Root Route
// snacks.get('/', (req, res) => {
//   res.send('Everything is good!');
// });

//INDEX ROUTE
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks) {
    res.status(200).json({ success: true, payload: allSnacks });
  } else {
    res.status(404).json({ success: false, payload: "Server Error!" });
  }
});

//GET ONE SNACK BY ID
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSnack = await getOneSnack(id);
  if (oneSnack.id) {
    res.status(200).json({ success: true, payload: oneSnack });
  } else {
    res.status(404).json({
      success: false,
      payload: `A snack with id number ${id} is not found!`,
    });
  }
});

//CREATE ROUTE USING POST METHOD
snacks.post("/", async (req, res) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = req.body;
  const aNewSnack = {
    name,
    fiber,
    protein,
    added_sugar,
    is_healthy,
    image,
  };

  aNewSnack.is_healthy = confirmHealth(aNewSnack);

  const createdSnack = await createSnack(
    aNewSnack.name,
    aNewSnack.fiber,
    aNewSnack.protein,
    aNewSnack.added_sugar,
    aNewSnack.is_healthy,
    aNewSnack.image
  );

  if (createdSnack) {
    res.status(200).json({ success: true, payload: aNewSnack });
  } else {
    res.status(404).json({ success: false, error: error.message });
  }

  // try {
  //   const newSnack = await createSnack(req.body);
  //   res.status(200).json({ success: true, payload: newSnack });
  // } catch (error) {
  //   res.status(400).json({ success: false, payload: error.message });
  // }
});

//UPDATE ROUTE USING PUT METHOD
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSnack = await updateSnack(id, req.body);
    res.status(200).json({ success: true, payload: updatedSnack });
  } catch (error) {
    res.status(400).json({ success: false, payload: error.message });
  }
});

//DELETE ROUTE SNACK USING DELETE
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
    console.log(deletedSnack);
    res.status(500).json({ success: false, payload: deletedSnack });
  }
});

module.exports = snacks;
