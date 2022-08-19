//DEPENDENCIES
const express = require("express");
const snacks = express.Router();

const db = require('../db/dbConfig');

const confirmHealth = require("../confirmHealth");


//IMPORT ALL THE HELPER FUNCTIONS HANDLING CRUD OPERATIONS
const {
  getAllSnacks,
  getOneSnack,
  createSnack,
  updateSnack,
  deleteSnack,

} = require("../queries/snacks");


//IMPORT CONFIRMHEALTH FUNC TO USE IN POST OPERATIONS
const confirmHealth = require('../confirmHealth');

//IMPORT VALIDATION CHECKS
const {
  changImageUrl,
  capitalizeSnackName,
} = require('../validation/checkSnacks');

//INDEX ROUTE
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks) {
    res.status(200).json({ success: true, payload: allSnacks });
  } else {
    res
      .status(404)
      .json({ success: false, payload: 'Error! No snacks found!' });
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


//CREATE ROUTE USING POST METHOD TO CREATE A NEW SNACK
snacks.post('/', changImageUrl, capitalizeSnackName, async (req, res) => {
  const { body } = req;
  const aNewSnack = body;

  body.is_healthy = confirmHealth(body);

  const createdSnack = await createSnack(aNewSnack);

  if (createdSnack) {
    res.status(200).json({ success: true, payload: createdSnack });
  } else {
    res
      .status(404)
      .json({ success: false, error: 'A new snack can not be added!' });
  }
});

//UPDATE ROUTE USING PUT METHOD
snacks.put('/:id', changImageUrl, capitalizeSnackName, async (req, res) => {

  const { id } = req.params;
  const { body } = req;

  body.is_healthy = confirmHealth(body);

  const updatedSnack = await updateSnack(id, body);

  if (updatedSnack.id) {
    res.status(200).json({ success: true, payload: updatedSnack });
  } else {
    res.status(404).json({
      success: false,
      payload: `A snack with id number ${id} can not be updated! Please try again.`,
    });
  }
});

//DELETE A SNACK BY ITS ID
snacks.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack) {
    if (deletedSnack.id) {
      res.status(200).json({ success: true, payload: deletedSnack });
    } else {
      res.status(404).json({ success: false, payload: deletedSnack });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: `A snack with id number ${id} can not be deleted! Please try again.`,
    });
  }
});

module.exports = snacks;
