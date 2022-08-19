//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const snacks = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
  getAllSnacks,
  getASnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require('../queries/snacks');

const {
  checkName,
  checkBoolean,
  checkImage,
  checkCapitalization,
} = require('../validation/checkSnacks');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
snacks.get('/', async (req, res) => {
  console.log('get all /');

  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({
      success: true,
      payload: allSnacks,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
snacks.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const snack = await getASnack(id);
  if (snack.id) {
    res.status(200).json({
      success: true,
      payload: snack,
    });
  } else {
    res.status(404).json({
      success: false,
      id: id,
      payload: 'not found',
    });
  }
});

//CREATE
snacks.post(
  '/',
  checkName,
  checkBoolean,
  checkImage,
  checkCapitalization,
  async (req, res) => {
    try {
      const addSnack = await createSnack(req.body);
      res.status(200).json({
        success: true,
        payload: addSnack[0]
        // {
        //   id: true,
        //   name: addSnack[0].name,
        //   is_healthy: addSnack[0].is_healthy,
        //   image: addSnack[0].image,
        // },
      });
    } catch (error) {
      // console.log('Caught in error');
       console.log(error.message);
      res.status(404).json({ success: false });
    }
  }
);

//DELETE
snacks.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack) {
    if (deletedSnack.id) {
      res.status(200).json({
        success: true,
        payload: deletedSnack,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'not found',
      });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: deletedSnack,
    });
  }
});

//update
snacks.put(
  '/:id',
  checkName,
  checkBoolean,
  checkImage,
  checkCapitalization,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    // const { body } = req;
    // body.name = checkCapitalization(body);
    // req.body.is_healthy = confirmHealth(req.body);

    const updatedSnack = await updateSnack(id, req.body);
    if (updatedSnack.id) {
      res.status(200).json({
        success: true,
        payload: updatedSnack,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = snacks;
